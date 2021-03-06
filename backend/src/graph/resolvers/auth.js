const UserModel = require("../../models/user");
const bcrypt = require("bcrypt");
const uuidv4 = require("uuid/v4");
const sendMail = require("../../config/mailer");
const { i18n } = require("../../i18n");
const jwt = require("jsonwebtoken");
const ValidationError = require("../../errors/validationError");

module.exports = {
    signup: async (args, req) => {
        let { email, firstName, lastName, password } = args.userInput;
        // Check user by email
        let user = await UserModel.findOne({
            email
        });

        // if user exists but has been not activated, return error
        if (user && !user.isActive) {
            throw new ValidationError(
                req.language,
                "auth.emailUnverified.message"
            );
        }

        // if user exists
        if (user) {
            throw new ValidationError(
                req.language,
                "auth.emailAddressInUse.error"
            );
        }

        // create hashed password
        return bcrypt
            .hash(password, 10)
            .then(hashedPassword => {
                const user = new UserModel({
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    password: hashedPassword,
                    verifyToken: uuidv4()
                });
                return user.save();
            })

            .then(user => {
                // send mail
                let host = process.env.APP_HOST;
                let port = process.env.APP_PORT;
                return sendMail(
                    user.email,
                    i18n(
                        req.language,
                        "emails.emailAddressVerification.subject",
                        i18n(req.language, "app.title")
                    ),
                    i18n(
                        req.language,
                        "emails.emailAddressVerification.body",
                        `${host}:${port}/verify/${user.verifyToken}`,
                        i18n(req.language, "app.title")
                    )
                )
                    .then(() => {
                        return i18n(
                            req.language,
                            "auth.verificationEmailSent.success"
                        );
                    })
                    .catch(async err => {
                        // remove user
                        await UserModel.findByIdAndRemove(user._id);
                        throw new ValidationError(
                            req.language,
                            auth.verificationEmailSent.error
                        );
                    });
            })
            .catch(error => {
                throw new ValidationError(req.language, error);
            });
    },

    signin: async (args, req) => {
        let { email, password } = args;

        // find user by email
        const user = await UserModel.findOne({ email });

        // account does not exists
        if (!user) {
            throw new ValidationError(
                req.language,
                "auth.userNotFound.message"
            );
        }

        // account has not been activated
        if (user && !user.isActive) {
            throw new ValidationError(
                req.language,
                "auth.accountNotActived.message"
            );
        }

        // check password
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            throw new ValidationError(
                req.language,
                "auth.passwordIncorrect.message"
            );
        }

        // get token
        let secretkey = process.env.JWT_SECRET_KEY;
        const token = jwt.sign(
            {
                userId: user.id
            },
            secretkey,
            {
                expiresIn: "10h"
            }
        );

        return {
            userId: user.id,
            email: user.email,
            token,
            tokenExpiration: 10
        };
    },

    verifyEmail: async (args, req) => {
        let { email } = args;
        // Check user by email
        let user = await UserModel.findOne({
            email
        });

        // if user exists
        if (!user) {
            throw new ValidationError(
                req.language,
                "errors.validation.message"
            );
        }

        // if user exists but has been not activated, return error
        if (user && user.isActive) {
            throw new ValidationError(
                req.language,
                "auth.accountActivated.message"
            );
        }

        user.verifyToken = uuidv4();
        await user.save();
        try {
            // send mail
            let host = process.env.APP_HOST;
            let port = process.env.APP_PORT;
            return sendMail(
                user.email,
                i18n(
                    req.language,
                    "emails.emailAddressVerification.subject",
                    i18n(req.language, "app.title")
                ),
                i18n(
                    req.language,
                    "emails.emailAddressVerification.body",
                    `${host}:${port}/verify/${user.verifyToken}`,
                    i18n(req.language, "app.title")
                )
            )
                .then(() => {
                    return i18n(
                        req.language,
                        "auth.verificationEmailSent.success"
                    );
                })
                .catch(async err => {
                    throw new ValidationError(
                        req.language,
                        auth.verificationEmailSent.error
                    );
                });
        } catch (error) {
            throw new ValidationError(req.language, error);
        }

        

        // create hashed password
        return bcrypt.hash(password, 10).then(hashedPassword => {
            const user = new UserModel({
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: hashedPassword,
                verifyToken: uuidv4()
            });
            return user.save();
        });
    }
};

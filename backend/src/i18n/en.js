const en = {
    app: {
        title: "AwesomeChat"
    },

    auth: {
        passwordReset: {
            error: `Email not recognized`
        },
        emailAddressInUse: {
            error: `User with this email already exists`
        },
        verificationEmailSent: {
            success: `A verification link has been sent to your email`
        },
        emailUnverified: {
            message: `The email address in use, please confirm your email to continue.`
        },
        accountActivated: {
            message: `Your account has been successfully activated`
        },
        accountNotActived: {
            message: `Your account has not activated`
        },
        userNotFound: {
            message: `User not found`
        },
        passwordIncorrect: {
            message: `Incorrect email or password`
        }
    },

    errors: {
        forbidden: {
            message: "Forbidden"
        },
        validation: {
            message: "An error occurred"
        }
    },

    emails: {
        invitation: {
            subject: `You've been invited to {0}`,
            body: `
        <p>Hello,</p>
        <p>You've been invited to {0}.</p>
        <p>Follow this link to register.</p>
        <p><a href="{1}">{1}</a></p>
        <p>Thanks,</p>
        <p>Your {0} team</p>
      `
        },
        emailAddressVerification: {
            subject: `Verify your email for {0}`,
            body: `
        <p>Hello,</p>
        <p>Follow this link to verify your email address.</p>
        <p><a href='{0}'>{0}</a></p>
        <p>If you didn’t ask to verify this address, you can ignore this email.</p>
        <p>Thanks,</p>
        <p>Your {1} team</p>
      `
        },
        passwordReset: {
            subject: `Reset your password for {0}`,
            body: `
        <p>Hello,</p>
        <p>Follow this link to reset your {0} password for your {1} account.</p>
        <p><a href='{2}'>{2}</a></p>
        <p>If you didn’t ask to reset your password, you can ignore this email.</p>
        <p>Thanks,</p>
        <p>Your {0} team</p>
      `
        }
    }
};

module.exports = en;

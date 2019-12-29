const UserModel = require("../../models/user");
const ContactModel = require("../../models/contact");
const { i18n } = require("../../i18n");
const ValidationError = require("../../errors/validationError");

module.exports = {
    sendFriendRequest: async (args, req) => {
        let currentUserId = req.userId;
        let friendId = args.friendId;

        let contact = await ContactModel.findOne({
            $or: [
                {
                    $and: [{ sender: currentUserId }, { receiver: friendId }]
                },
                {
                    $and: [{ sender: friendId }, { receiver: currentUserId }]
                }
            ]
        });

        // Check contact exists
        if (contact || (contact && contact.status)) {
            throw new ValidationError(
                req.language,
                "contact.friendRequest.error"
            );
        }

        let contactInfo = new ContactModel({
            sender: currentUserId,
            receiver: friendId
        });

        await contactInfo.save();
        return i18n(req.language, "contact.friendRequest.sent");
    },

    cancelFriendRequest: async (args, req) => {
        let currentUserId = req.userId;
        let friendId = args.friendId;

        let contact = await ContactModel.findOne({
            $or: [
                {
                    $and: [
                        { sender: currentUserId },
                        { receiver: friendId },
                        { status: false }
                    ]
                },
                {
                    $and: [
                        { sender: friendId },
                        { receiver: currentUserId },
                        { status: false }
                    ]
                }
            ]
        });

        // Check contact, ì not exist return error
        if (!contact) {
            throw new ValidationError(
                req.language,
                "contact.friendRequest.error"
            );
        }

        await contact.remove();
        return i18n(req.language, "contact.friendRequest.cancel");
    },

    confirmFriendRequest: async (args, req) => {
        let currentUserId = req.userId;
        let friendId = args.friendId;

        let contact = await ContactModel.findOne({
            $and: [
                { sender: friendId },
                { receiver: currentUserId },
                { status: false }
            ]
        });

        // Check contact, if not exist return error
        if (!contact) {
            throw new ValidationError(
                req.language,
                "contact.friendRequest.error"
            );
        }

        contact.status = true;
        await contact.save();
        return i18n(req.language, "contact.friendRequest.confirm");
    },

    unfriend: async (args, req) => {
        let currentUserId = req.userId;
        let friendId = args.friendId;

        // check user's friend
        let friend = await UserModel.findById(friendId);
        if (!friend) {
            throw new ValidationError(
                req.language,
                "auth.userNotFound.message"
            );
        }

        let contact = await ContactModel.findOne({
            $or: [
                {
                    $and: [
                        { sender: currentUserId },
                        { receiver: friendId },
                        { status: true }
                    ]
                },
                {
                    $and: [
                        { sender: friendId },
                        { receiver: currentUserId },
                        { status: true }
                    ]
                }
            ]
        });

        // Check contact, if not exist return error
        if (!contact) {
            throw new ValidationError(
                req.language,
                "contact.friendRequest.error"
            );
        }
        // remove contact
        await contact.remove();
        return i18n(
            req.language,
            "contact.unfriend.message",
            friend.firstName + " " + friend.lastName
        );
    }
};

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ChatGroupSchema = new schema({
    name: String,
    admins: [
        {
            userId: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
    members: [
        {
            userId: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            }
        }
    ]
}, {timestamps: true});

module.exports = mongoose.mongo('ChatGroup', ChatGroupSchema)

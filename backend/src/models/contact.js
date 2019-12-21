const mongoose = require('mongoose');

const schema = mongoose.Schema;

let ContactSchema = new schema({
    sender : {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Contact', ContactSchema);

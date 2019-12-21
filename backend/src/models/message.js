const mongoose = require('mongoose');

const schema = mongoose.Schema;

let MessageSchema = new schema({
    sender: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    seen: {
        type: Boolean,
        default: false
    },
    file: {
        data: ArrayBuffer,
        contentType: String,
        fileName: String
    }
}, {timestamps: true})
const mongoose = require('mongoose');

const schema = mongoose.Schema;

let UserSchema = new schema({
    firstName : {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
        minlength: 3
    },
    lastName : {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
        minlength: 3
    },
    avatar: String,
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: String,
    verifyToken: String,
    phone: {
        type: String,
        maxlength: 16
    },
    isActive: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);

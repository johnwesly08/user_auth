const {default: mongoose, Schema} = require('mongoose');

const AuthSchema = new Schema({
    uname: {
        type: String,
        require: true
    },
    gmail: {
        type: String,
        require: true
    },
    pwd: {
        type: String,
        require: true
    }
}, {timestamps:  true});

module.exports = mongoose.model('AuthSchema',AuthSchema,"users");
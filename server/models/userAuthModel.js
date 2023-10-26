const {default: mongoose, Schema} = require('mongoose');

const AuthSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    gmail: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, {timestamps:  true});

module.exports = mongoose.model('AuthSchema',AuthSchema,"users");
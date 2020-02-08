const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: String,
    password: String,
    preferredName: String,
    email: String,
    phoneNumber: Number,
    role: Array,
    dogList: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
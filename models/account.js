const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    score: Number
});

Account.plugin(passportLocalMongoose);

const accounts = mongoose.model('accounts', Account);

module.exports = accounts;

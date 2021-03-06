var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = mongoose.Schema({
    username: String,
    password : String,
    email: String,
    name: String,
    phoneNumber : String
});

userSchema.plugin(passportLocalMongoose);


var User = mongoose.model("Customer", userSchema);


module.exports = User;
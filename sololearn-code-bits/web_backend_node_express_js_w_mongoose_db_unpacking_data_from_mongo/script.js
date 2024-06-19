// not Calviղ

// 
// https://code.sololearn.com/W0Qe2vNKiTn0/

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    name: String,
    age: Number,
    country: String
});

module.exports = mongoose.model('User', userSchema);


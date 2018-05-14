const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const AutherSchema = new mongooseSchema({
    aname: String,
    aage: Number
});

module.exports = mongoose.model('Authers',AutherSchema);
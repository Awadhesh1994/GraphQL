const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const BookSchema = new mongooseSchema({
    bname: String,
    bcategory: String,
    bpublishyear: String,
    brateing: String,
    autherID: String
});

module.exports = mongoose.model('Books',BookSchema);
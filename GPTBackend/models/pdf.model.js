const mongoose = require('mongoose');

var pdfSchema = new mongoose.Schema({
    fullName: String,
    bookContent: String,
    time: String,
    imageURLs: Array,
    pdf: String
});

mongoose.model('Pdf', pdfSchema);
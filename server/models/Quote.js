const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
    quoteEnglish: {
        type: String,
        required: true
    },
    quoteOriginal: {
        type: String,
        required: true
    },
    languageCategory: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Quote', QuoteSchema);
const mongoose = require('mongoose');

const cardTemplate = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    cardNumber: {
        type: String,
        required: true
    },

    cardName: {
        type: String,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }


})


module.exports = mongoose.model('cardTable', cardTemplate);
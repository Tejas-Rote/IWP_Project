const mongoose = require('mongoose');

const bookTemplate = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    adults: {
        type: String,
        required: true
    },
    children: {
        type: String,
        required: true
    },

    room: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('bookingTable', bookTemplate);
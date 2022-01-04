const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({

    name: {
        type: String
    },

    weight: {
        type: String
    },

    repetitions: {
        type: String
    },

    exerciseImg: {
        type: String
    },

    day: {
        type: mongoose.Schema.Types.ObjectId, ref: 'dayList'

    }
    
}, { timestamps: true })

module.exports = mongoose.model('exerciseSchedule', exerciseSchema);
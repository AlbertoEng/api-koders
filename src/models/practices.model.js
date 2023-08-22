const mongoose = require('mongoose');
const Koder = require('./koders.model');

const practiceSchema = new mongoose.Schema({
    titulo : {
        type: String,
        required: true,
        trim: true,
    },
    repo: {
        type: String,
        required: true,
        match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    },
    koder: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        trim: true,
        ref: 'Koder'
    }

})

module.exports = mongoose.model('Practice', practiceSchema);
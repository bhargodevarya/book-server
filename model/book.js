const mongoose = require('mongoose')

const schema = new mongoose().schema({})

const book = mongoose.model('Book', schema);

module.exports = book
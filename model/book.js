const mongoose = require('mongoose')

const schema = new mongoose().schema({title: 'String', author: 'String', image: 'String', description: 'String', category: [String]})

const book = mongoose.model('Book', schema);

module.exports = book
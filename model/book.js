const mongoose = require('mongoose')

const schema = new mongoose.Schema({title: 'String', author: 'String', image: 'String', description: 'String', category: [String]})

const Book = mongoose.model('Book', schema, 'Books');

module.exports = Book
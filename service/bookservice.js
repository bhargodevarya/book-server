const Book = require("../model/Book");

function saveBook(bookToSave) {
    console.log("Save book")
}

function getBook(criteria) {
    console.log("Get book")
}

function getAllBooks() {
    console.log("Get all books")
    return Book.find({}, (err, res) => {
        if (err) {
            console.error('Error', err)
        }
    })
}

module.exports = {
    getAllBooks
}
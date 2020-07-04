const express = require('express')
const server = express()
require('./bootstrap/bootstrap')
const bookService = require('./service/bookservice')

const PORT = require('./util/Constants').PORT

server.get('/health', (req, res) => {
    res.json({status: "Up"})
})

server.get('/book', (req, res) => {
    bookService.getAllBooks().then(data => {
        console.log(data)
        res.json(data)
    }).catch(err => console.log('Error fetching books', err))
})

server.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server started at ${PORT}`)
    }
})
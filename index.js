const express = require('express')
const server = express()

const PORT = 4001;

server.get('/health', (req, res) => {
    res.json({status: "Up"})
})

server.get('/book', (req, res) => {
    res.json({message: "Will return all books"})
})

server.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server started at ${PORT}`)
    }
})
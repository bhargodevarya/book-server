const express = require('express')
const server = express()

const PORT = 4001;

server.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server started at ${PORT}`)
    }
})
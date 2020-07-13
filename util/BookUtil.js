const mongoose = require("mongoose");
const Book = require("../model/Book");
const Metadata = require('../util/Constants')
const MONGO_URI = Metadata.DB_URL
const MONGO_OPTIONS = Metadata.MONGO_OPTIONS

const conn = mongoose.connect(MONGO_URI, MONGO_OPTIONS);

Book.find({}, function (err, res) {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
    mongoose.connection.close()
});

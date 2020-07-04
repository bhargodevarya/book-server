const mongoose = require("mongoose");
const Metadata = require('../util/Constants')
const MONGO_URI = Metadata.DB_URL
const MONGO_OPTIONS = Metadata.MONGO_OPTIONS

const conn = mongoose.connect(MONGO_URI, MONGO_OPTIONS);

conn.then(res => console.log("Connected to Mongo"))

console.log("Bootstrap is done")
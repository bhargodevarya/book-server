const DB_URL = process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost/book'
const PORT = process.env.PORT | 5001
const MONGO_OPTIONS = {useNewUrlParser: true}

module.exports = {
    PORT, 
    DB_URL,
    MONGO_OPTIONS
}
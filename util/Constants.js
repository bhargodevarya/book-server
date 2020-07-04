const DB_URL = process.env.MONGO_URL | 'mongodb://localhost/book'
const PORT = process.env.PORT | 5001

module.exports = {
    PORT, 
    DB_URL
}
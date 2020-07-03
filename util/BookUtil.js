//connect to Mongo and create books in Book collection
//This will be a cmd line utility when I cant access the UI

const mongoose = require('mongoose');
const Book = require("../model/Book");

const conn = mongoose.connect('mongodb://localhost/book', {useNewUrlParser: true});

const fiveAmClub = new Book({
    name: "5 AM Club",
    author: "Robin Sharma",
    image: "https://book-app-images.s3.amazonaws.com/5AMClub.jpg",
    description: "Morning routing book",
    category: ["lifestyle", 'self-help'],
  })

fiveAmClub.save(function(err, bookSaved){
    if (err) {
        console.log(err)
    } else  {
        console.log(bookSaved._id)
        mongoose.connection.close()
    }
});
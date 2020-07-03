//connect to Mongo and create books in Book collection
//This will be a cmd line utility when I cant access the UI

const mongoose = require('mongoose');
const Book = require("../model/Book");

const conn = mongoose.connect('mongodb://localhost/book', {useNewUrlParser: true});

const fiveAmClub = new Book({
    name: "Savarkar: Echoes from a Forgotten Past",
    author: "Vikram Sampath",
    image: "https://book-app-images.s3.amazonaws.com/savarkarBook.jpg",
    description: "Biography of veer Savarkar",
    category: ["history", 'biography']
  })

fiveAmClub.save(function(err, bookSaved){
    if (err) {
        console.log(err)
    } else  {
        console.log(bookSaved._id)
        mongoose.connection.close()
    }
});
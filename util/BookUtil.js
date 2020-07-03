//connect to Mongo and create books in Book collection
//This will be a cmd line utility when I cant access the UI

const mongoose = require('mongoose');
const Book = require("../model/Book");

mongoose.connect('mongodb://localhost/book', {useNewUrlParser: true});

const myBook = new Book({
  name: "book1",
  author: "Amar Dev",
  image: "url",
  description: "This is a dummy desc",
  category: ["fiction"],
})

myBook.save(function(err, bookSaved){
    if (err) {
        console.log(err)
    } else  {
        console.log(bookSaved._id)
    }
});

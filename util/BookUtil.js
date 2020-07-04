const mongoose = require("mongoose");
const Book = require("../model/Book");
const Metadata = require('../util/Constants')
const MONGO_URI = Metadata.DB_URL
const MONGO_OPTIONS = Metadata.MONGO_OPTIONS

console.log(MONGO_URI)
const conn = mongoose.connect(MONGO_URI, MONGO_OPTIONS);

// const fiveAmClub = new Book({
//     name: "Savarkar: Echoes from a Forgotten Past",
//     author: "Vikram Sampath",
//     image: "https://book-app-images.s3.amazonaws.com/savarkarBook.jpg",
//     description: "Biography of veer Savarkar",
//     category: ["history", 'biography']
//   })

// fiveAmClub.save(function(err, bookSaved){
//     if (err) {
//         console.log(err)
//     } else  {
//         console.log(bookSaved._id)
//         mongoose.connection.close()
//     }
// });

// Book.findOne({  "author" : "Vikram Sampath" }, 
// function (err, res) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)
//     }
//     mongoose.connection.close()
// }
// );

Book.find({}, 
function (err, res) {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
    mongoose.connection.close()
}
);

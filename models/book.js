const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookid:String,
  title: String, 
  description: String,
  image: String,
  pages:String,
  authors: String, 
  previewLink: String,
  isbn:String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

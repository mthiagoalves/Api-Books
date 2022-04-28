const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  continue: {
    type: Boolean,
    require: true,
  },
});

const Book = mongoose.model('books', BookSchema);

module.exports = Book;

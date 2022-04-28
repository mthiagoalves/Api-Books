const Books = require('../models/Books');

const findBooksService = async () => {
  const books = await Books.find();

  return books;
};

const findByIDBooksService = async (idBook) => {
  const book = await Books.findById(idBook);
  return book;
};

const createBookService = async (newBook) => {
  const newBookcreated = await Books.create(newBook);
  return newBookcreated;
};

const updateBookService = async (idBook, bookEdit) => {
  const bookUpdated = await Books.findByIdAndUpdate(idBook, bookEdit);
  return [bookUpdated, bookEdit];
};

const deleteBookService = async (idBook) => {
  return await Books.findByIdAndDelete(idBook);
};

module.exports = {
  findBooksService,
  findByIDBooksService,
  createBookService,
  updateBookService,
  deleteBookService,
};

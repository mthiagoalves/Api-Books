const booksService = require('../services/services');
const mongoose = require('mongoose');

const findAllBooksController = async (req, res) => {
  const books = await booksService.findBooksServices();

  if (books.length == 0) {
    return res.status(404).send({ message: 'Not found more books' });
  }

  res.send(books);
};

const findByIDBooksController = async (req, res) => {
  const idBooks = req.params.id;

  const chosenBooks = await booksService.findByIDBooksService(idBooks);

  if (!chosenBooks) {
    return res.status(404).send({ message: 'Id not found' });
  }

  res.send(chosenBooks);
};

const createBooksController = async (req, res) => {
  const book = req.body;

  const newBook = await guitarsService.createBooksController(book);

  res.status(201).send(newBook);
};

const updateBookController = async (req, res) => {
  const idBook = req.params.id;

  const bookEdit = req.body;

  if (
    !bookEdit ||
    !bookEdit.name ||
    !bookEdit.price ||
    !bookEdit.img ||
    !bookEdit.description
  ) {
    return res.status(400).send({message: 'Send all info the book' });
  }

  const updateBook = await booksService.updateBookController(
    idBook,
    bookEdit,
  );

  res.send(updateBook);
};

const deleteBookController = async (req, res) => {
  const idBook = req.params.id;

  await booksService.deleteBookController(idBook);

  res.send({ message: 'Book Deleted' });
};

module.exports = {
  findAllBooksController,
  findByIDBooksController,
  createBooksController,
  updateBookController,
  deleteBookController,
};

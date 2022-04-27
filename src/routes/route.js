const route = require('express').Router();
const controllerBook = require('../controller/controller');
const {validIdBook, validObjectBook} = require('../middlewares/middlewares')

route.get('/find-book', controllerBook.findAllBooksController);
route.get('/book/:id', validIdBook, controllerBook.findByIDBooksController);
route.post('/create', validObjectBook, controllerBook.createBooksController);
route.put('/update/:id', validIdBook, validObjectBook, controllerBook.updateBookController);
route.delete('/delete/:id', validIdBook, controllerBook.deleteBookController);

module.exports = route;

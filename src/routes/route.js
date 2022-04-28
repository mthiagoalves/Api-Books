const route = require('express').Router();
const controllerBook = require('../controller/controller');
const controllerCart = require('../controller/cart.controler');
const {
  validIdBook,
  validObjectBook,
  validObjectBodyCart,
} = require('../middlewares/middlewares');

route.get('/find-book', controllerBook.findAllBooksController);
route.get('/book/:id', validIdBook, controllerBook.findByIDBooksController);
route.post('/create', validObjectBook, controllerBook.createBooksController);
route.put(
  '/update/:id',
  validIdBook,
  validObjectBook,
  controllerBook.updateBookController,
);
route.delete('/delete/:id', validIdBook, controllerBook.deleteBookController);

route.get('/all-cart', controllerCart.findAllCartController);
route.post(
  '/create-cart',
  validObjectBodyCart,
  controllerCart.createManyItemsCartController,
);
route.delete('/finish-cart', controllerCart.deleteAllItemsCartController);

module.exports = route;

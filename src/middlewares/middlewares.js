const mongoose = require('mongoose');

const validIdBook = (req, res, next) => {
  const idBook = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idBook)) {
    return res.status(400).send({ message: 'Id invalid' });
  }
  next();
};

const validObjectBook = (req, res, next) => {
  const book = req.body;

  if (
    !book ||
    !book.title ||
    !book.price ||
    !book.img ||
    !book.description ||
    !book.author ||
    !book.genre ||
    !book.year ||
    !book.continue
  ) {
    return res.status(400).send({ message: 'Send all info the book' });
  }
  next();
};

const validObjectBodyCart = (req, res, next) => {
  const cart = req.body;

  cart.forEach((item) => {
    if (!item || !item.bookId || !item.qtd) {
      return res.status(400).send({ message: 'Send all info the book' });
    }
  });
  next();
};

module.exports = {
  validIdBook,
  validObjectBook,
  validObjectBodyCart,
};

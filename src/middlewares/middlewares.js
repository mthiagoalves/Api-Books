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
    !book.name ||
    !book.price ||
    !book.img ||
    !book.description
  ) {
    return res.status(400).send({ message: 'Send all info the book' });
  }
  next();
};

module.exports = {
  validIdBook,
  validObjectBook,
};

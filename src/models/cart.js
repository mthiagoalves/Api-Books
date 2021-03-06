const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  bookId: {
    type: String,
    require: true,
  },
  qtdSelected: {
    type: Number,
    require: true,
  },
});

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;

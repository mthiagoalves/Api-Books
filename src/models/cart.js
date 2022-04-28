const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  bookId: {
    type: String,
    require: true,
  },
  qtd: {
    type: String,
    require: true,
  },
});

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;

const Cart = require('../models/cart');

const findAllCartServices = async () => {
  const allCart = await Cart.find();
  return allCart;
};

const createManyItemsCartServices = async (newCart) => {
  const createdCart = await Cart.insertMany(newCart);
  return createdCart;
};

const deleteAllItemsCartServices = async () => {
  return await Cart.deleteMany();
};

module.exports = {
  findAllCartServices,
  createManyItemsCartServices,
  deleteAllItemsCartServices,
};

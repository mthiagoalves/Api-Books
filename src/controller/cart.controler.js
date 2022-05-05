const cartServices = require('../services/cart.services');

const findAllCartController = async (req, res) => {
  const allCart = await cartServices.findAllCartServices();

  if (!allCart) {
    return res.status(404).send({ message: 'Item not found' });
  }

  res.send(allCart);
};

const createManyItemsCartController = async (req, res) => {
  const cart = req.body;
  const newCart = await cartServices.createManyItemsCartServices(cart);

  res.status(201).send(newCart);
};

const deleteAllItemsCartController = async (req, res) => {
  await cartServices.deleteAllItemsCartServices();
  res.send({ message: 'Complete' });
};

module.exports = {
  findAllCartController,
  createManyItemsCartController,
  deleteAllItemsCartController,
};

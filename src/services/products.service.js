const productsModel = require('../models');

const getAllService = async () => {
  const products = await productsModel.getAllModel();
  return { type: null, message: products };
};

const getProductIdService = async (id) => {
  const products = await productsModel.getProductIdModel(id);

  if (!products) return { type: 'NOT_FOUND', message: 'Product not found' };

  return { type: null, message: products };
};

module.exports = {
  getAllService,
  getProductIdService,
};
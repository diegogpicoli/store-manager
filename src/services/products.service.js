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

const insertProductService = async (products) => {
  const insertId = await productsModel.insertProductModel(products);

  return { type: null, message: insertId };
};

module.exports = {
  getAllService,
  getProductIdService,
  insertProductService,
};
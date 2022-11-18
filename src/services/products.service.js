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

const attProductService = async (id, name) => {
  const affectedRows = await productsModel.attProductModel(id, name);

  if (!affectedRows) return { type: 'NOT_FOUND', message: 'Product not found' };

  return { type: null, message: affectedRows };
};

const deleteProductService = async (id) => {
  const affectedRows = await productsModel.deleteProductModel(id);

  if (!affectedRows) return { type: 'NOT_FOUND', message: 'Product not found' };

  return { type: null, message: affectedRows };
};

module.exports = {
  getAllService,
  getProductIdService,
  insertProductService,
  attProductService,
  deleteProductService,
};
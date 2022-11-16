const model = require('../models');

const insertSalesService = async (sales) => {
  const ids = sales.map((product) => product.productId);

  const products = await model.getAllModel();

  const productsId = products.map((product) => product.id);

  const verificaIds = ids.every((id) => productsId.includes(id));

  if (!verificaIds) return { type: 'NOT_FOUND', message: 'Product not found' };

  const insertId = await model.insertSalesModel(sales);

  return { type: null, message: insertId };
};

module.exports = {
  insertSalesService,
};
const model = require('../models');

const getAllSalesService = async () => {
  const sales = await model.getAllSalesModel();
  return { type: null, message: sales };
};

const getSalesIdService = async (id) => {
  const sales = await model.getAllSalesModel();

  const verificaId = sales.find((sale) => sale.saleId === Number(id));

  if (!verificaId) return { type: 'NOT_FOUND', message: '"Sale not found"' };
  const salesId = await model.getSalesIdModel(id);

  return { type: null, message: salesId };
};

const insertSalesService = async (sales) => {
  const ids = sales.map((product) => product.productId);

  const products = await model.getAllModel();

  const productsId = products.map((product) => product.id);

  const verificaIds = ids.every((id) => productsId.includes(id));

  if (!verificaIds) return { type: 'NOT_FOUND', message: 'Product not found' };

  const insertId = await model.insertSalesModel(sales);

  return { type: null, message: insertId };
};

const deleteSalesService = async (id) => {
  const affectedRows = await model.deleteSalesModel(id);

  if (!affectedRows) return { type: 'NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: affectedRows };
};

module.exports = {
  insertSalesService,
  getAllSalesService,
  getSalesIdService,
  deleteSalesService,
};
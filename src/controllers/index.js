const productsController = require('./products.controller');
const salesController = require('./sales.controller');

module.exports = {
  getAllProducts: productsController.getAllProducts,
  getAllProductsId: productsController.getAllProductsId,
  insertProduct: productsController.insertProduct,
  insertSales: salesController.insertSales,
};
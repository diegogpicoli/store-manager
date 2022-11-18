const productsController = require('./products.controller');
const salesController = require('./sales.controller');

module.exports = {
  getAllProducts: productsController.getAllProducts,
  getAllProductsId: productsController.getAllProductsId,
  insertProduct: productsController.insertProduct,
  attProduct: productsController.attProduct,
  deleteProduct: productsController.deleteProduct,
  insertSales: salesController.insertSales,
  getAllSales: salesController.getAllSales,
  getSalesId: salesController.getSalesId,
};
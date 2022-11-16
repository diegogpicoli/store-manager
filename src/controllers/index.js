const productsController = require('./products.controller');

module.exports = {
  getAllProducts: productsController.getAllProducts,
  getAllProductsId: productsController.getAllProductsId,
  insertProduct: productsController.insertProduct,
};
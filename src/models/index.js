const productsModel = require('./products.model');

module.exports = {
  getAllModel: productsModel.getAll,
  getProductIdModel: productsModel.getProductId,
  insertProductModel: productsModel.insertProduct,
};
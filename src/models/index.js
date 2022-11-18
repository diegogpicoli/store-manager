const productsModel = require('./products.model');
const salesModel = require('./sales.model');

module.exports = {
  getAllModel: productsModel.getAll,
  getProductIdModel: productsModel.getProductId,
  insertProductModel: productsModel.insertProduct,
  attProductModel: productsModel.attProduct,
  deleteProductModel: productsModel.deleteProduct,
  insertSalesModel: salesModel.insertSales,
  getAllSalesModel: salesModel.getAllSales,
  getSalesIdModel: salesModel.getSalesId,
  deleteSalesModel: salesModel.deleteSales,
};
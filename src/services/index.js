const productsService = require('./products.service');
const salesService = require('./sales.service');

module.exports = {
  getAllService: productsService.getAllService,
  getProductIdService: productsService.getProductIdService,
  insertProductService: productsService.insertProductService,
  insertSalesService: salesService.insertSalesService,
};
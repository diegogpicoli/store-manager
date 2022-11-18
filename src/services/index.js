const productsService = require('./products.service');
const salesService = require('./sales.service');

module.exports = {
  getAllService: productsService.getAllService,
  getProductIdService: productsService.getProductIdService,
  insertProductService: productsService.insertProductService,
  attProductService: productsService.attProductService,
  deleteProductService: productsService.deleteProductService,
  insertSalesService: salesService.insertSalesService,
  getAllSalesService: salesService.getAllSalesService,
  getSalesIdService: salesService.getSalesIdService,
};
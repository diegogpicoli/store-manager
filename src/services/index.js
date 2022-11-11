const productsService = require('./products.service');

module.exports = {
  getAllService: productsService.getAllService,
  getProductIdService: productsService.getProductIdService,
};
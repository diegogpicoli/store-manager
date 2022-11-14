const services = require('../services');

const getAllProducts = async (_req, res) => {
  const { message } = await services.getAllService();

  res.status(200).json(message);
};

const getAllProductsId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await services.getProductIdService(id);

  if (type) return res.status(404).json({ message: 'Product not found' });
  
  res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getAllProductsId,
};
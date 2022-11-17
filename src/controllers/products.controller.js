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

const insertProduct = async (req, res) => {
  const { body } = req;
  
  const { message: insertId } = await services.insertProductService(body);

  const { message } = await services.getProductIdService(insertId);
  
  res.status(201).json(message);
};

module.exports = {
  getAllProducts,
  getAllProductsId,
  insertProduct,
};
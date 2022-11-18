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

const attProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, message } = await services.attProductService(id, name);

  if (type) return res.status(404).json({ message });

  res.status(200).json({ id, name });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await services.deleteProductService(id);

  if (type) return res.status(404).json({ message });

  res.status(204).json();
};

module.exports = {
  getAllProducts,
  getAllProductsId,
  insertProduct,
  attProduct,
  deleteProduct,
};
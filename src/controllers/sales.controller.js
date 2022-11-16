const services = require('../services');

const getAllSales = async (_req, res) => {
  const { message } = await services.getAllSalesService();

  res.status(200).json(message);
};

const getSalesId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await services.getSalesIdService(id);

  if (type) return res.status(404).json({ message: 'Sale not found' });
  
  res.status(200).json(message);
};

const insertSales = async (req, res) => {
  const { body } = req;

  const { type, message } = await services.insertSalesService(body);

  if (type) return res.status(404).json({ message });
  
  res.status(201).json({
    id: message,
    itemsSold: body,
  });
};

module.exports = {
  insertSales,
  getAllSales,
  getSalesId,
};
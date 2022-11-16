const services = require('../services');

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
};
const validateInsertSales = async (req, res, next) => {
  const { body } = req;

  const quantityValue = body.some((item) => Number(item.quantity) <= 0);
  if (quantityValue) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' }); 
  }
  
  const productId = body.every((item) => !item.productId);
  if (productId) return res.status(400).json({ message: '"productId" is required' });

  const quantity = body.every((item) => !item.quantity);
  if (quantity) return res.status(400).json({ message: '"quantity" is required' });

  next();
};

module.exports = {
  validateInsertSales,
};
const snakeize = require('snakeize');
const connection = require('./connection');

const insertSalesId = async () => {
   const [{ insertId }] = await connection.execute(
      'INSERT INTO StoreManager.sales (date) VALUES (default)',
      [],
  );
  
  return insertId;
};

const insertSales = async (sales) => {
  const saleId = await insertSalesId();

  const newSales = sales.map((sale) => ({ ...sale, saleId }));

  await Promise.all(newSales.map((newSale) => {
    const colunas = Object.keys(snakeize(newSale))
      .map((key) => `${key}`)
      .join(', ');
  
    const valores = Object.keys(newSale)
      .map((_key) => '?')
      .join(', ');
    
    return (
      connection.execute(
      `INSERT INTO StoreManager.sales_products (${colunas}) VALUE (${valores})`,
      [...Object.values(newSale)],
      )
    );
  }));
  return saleId;
};

module.exports = {
  insertSales,
};
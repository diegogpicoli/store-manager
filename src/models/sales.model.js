const snakeize = require('snakeize');
const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT
      sp.sale_id AS saleId,
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM 
      StoreManager.sales_products AS sp
    INNER JOIN 
      StoreManager.sales AS s
    ON s.id = sale_id
    ORDER BY sp.sale_id, sp.product_id`,
  );
  return result;
};

const getSalesId = async (id) => {
  const [result] = await connection.execute(
    `SELECT
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM 
      StoreManager.sales_products AS sp
    INNER JOIN 
      StoreManager.sales AS s
    ON s.id = sale_id
    WHERE sale_id = ?`,
    [id],
  );
  return result;
};

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

const deleteSales = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return affectedRows;
};

module.exports = {
  insertSales,
  getAllSales,
  getSalesId,
  deleteSales,
};
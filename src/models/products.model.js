const snakeize = require('snakeize');
const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getProductId = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const insertProduct = async (product) => {
  const colunas = Object.keys(snakeize(product))
  .map((key) => `${key}`)
    .join(', ');
  
  const valores = Object.keys(product)
  .map((_key) => '?')
  .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${colunas}) VALUE (${valores})`,
    [...Object.values(product)],
  );
  
  return insertId;
};

const attProduct = async (id, name) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  
  return affectedRows;
};

module.exports = {
  getAll,
  getProductId,
  insertProduct,
  attProduct,
};

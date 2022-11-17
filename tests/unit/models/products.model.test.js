const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models');


const connection = require('../../../src/models/connection');
const products = require('./mocks/products.model.mock');

describe('Testes de unidade do model de produtos', function () {
  afterEach(sinon.restore);

  it('Pesquisando produtos no banco de dado', async function () {
    sinon.stub(connection, 'execute').resolves([products.products]);
    const result = await productsModel.getAllModel();
    expect(result).to.equal(products.products);
  });

  it('Pesquisando produtos no banco de dado por id', async function () {
    sinon.stub(connection, 'execute').resolves([products.productsId]);
    const result = await productsModel.getProductIdModel(2);
    expect(result).to.equal(products.productsId[0]);
  });

    it('Testa adição de item ao banco de dados', async function () {
      sinon.stub(connection, 'execute').resolves([2]);
      const result = await productsModel.insertProductModel({ name: 'productX'});
  });
});

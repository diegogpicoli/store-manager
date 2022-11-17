const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models');


const connection = require('../../../src/models/connection');
const sales = require('./mocks/sales.model.mock');

describe('Testes de unidade do model de produtos', function () {
  afterEach(sinon.restore);

  it('Pesquisando todos as sales no banco de dado', async function () {
    sinon.stub(connection, 'execute').resolves([sales.allSales]);
    const result = await salesModel.getAllSalesModel();
    expect(result).to.equal(sales.allSales);
  });

  it('Pesquisando sales por id no banco de dado', async function () {
    sinon.stub(connection, 'execute').resolves([sales.allSales][0]);
    const result = await salesModel.getSalesIdModel(1);
    expect(result).to.equal(sales.allSales[0]);
  });

  it('Adicionando uma nova sales no banco de dados', async function () {
    sinon.stub(connection, 'execute').resolves([5]);
    const result = await salesModel.insertSalesModel(sales.salesArray);
  });
});

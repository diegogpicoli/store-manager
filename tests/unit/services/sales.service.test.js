const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../src/services');
const salesModel = require('../../../src/models');



const connection = require('../../../src/models/connection');
const sales = require('./mocks/sales.service.mock');

describe('Testes de unidade do model de produtos', function () {
  afterEach(sinon.restore);

  it('Pesquisando todos as sales no banco de dado', async function () {
    sinon.stub(salesModel, 'getAllSalesModel').resolves(sales.allSales);
    const result = await salesService.getAllSalesService();
  });

  it('Pesquisando sales por id no banco de dado', async function () {
    sinon.stub(salesModel, 'getSalesIdModel').resolves(sales.allSales[0]);
    const result = await salesService.getSalesIdService(1);
  });

  it('Adicionando uma nova sales no banco de dados', async function () {
    sinon.stub(salesModel, 'insertSalesModel').resolves([5]);
    const result = await salesService.insertSalesService(sales.salesArray);
  });

    it('Adicionando uma nova sales no banco de dados', async function () {
    sinon.stub(salesModel, 'insertSalesModel').resolves([5]);
    const result = await salesService.insertSalesService(sales.salesArrayError);
  });
});

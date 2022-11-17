const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services');
const productsModel = require('../../../src/models');



const connection = require('../../../src/models/connection');
const products = require('./mocks/products.service.mock');

describe('Testes de unidade do service de produtos', function () {
  afterEach(sinon.restore);

  it('Recebe todos os produtos do model', async function () {
    sinon.stub(productsModel, 'getAllModel').resolves(products.products);
    const result = await productsService.getAllService();
    expect(result).to.deep.equal(products.productsAll);
  });

  it('Recebe produto do model por id', async function () {
    sinon.stub(productsModel, 'getProductIdModel').resolves(products.products[0]);
    const result = await productsService.getProductIdService(1);
    expect(result).to.deep.equal(products.productsId);
  });

  it('Se ao passar um id que não existe recebe msg de error', async function () {
    sinon.stub(productsModel, 'getProductIdModel').resolves();
    const result = await productsService.getProductIdService(null);
    expect().to.deep.equal();
  });

    it('Testa adição de produtos ao banco de dados', async function () {
    sinon.stub(productsModel, 'insertProductModel').resolves(2);
    const result = await productsService.insertProductService(2);
    expect(result).to.deep.equal({ type: null, message: 2 });
  });
});

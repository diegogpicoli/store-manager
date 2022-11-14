const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);
const app = require('../../../src/app');

const productsController = require('../../../src/controllers');
const productsService = require('../../../src/services');

const connection = require('../../../src/models/connection');

const products = require('./mocks/products.controller.mock');

describe('Testes de unidade do controller de produtos', function () {
  afterEach(sinon.restore);

  it('Recebe todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products.products]);
    const { body, status } = await chai.request(app).get('/products');
    expect(body).to.deep.equal(products.products);
    expect(status).to.deep.equal(200);
  });

  it('Recebe o produto com id correto', async function () {
    sinon.stub(connection, 'execute').resolves([products.products]);
    const { body, status } = await chai.request(app).get('/products/1');
    expect(body).to.deep.equal(products.productsId);
    expect(status).to.deep.equal(200);
  });

    it('Recebe o produto com id correto', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);
    const { body, status } = await chai.request(app).get('/products/1');
    expect(body).to.deep.equal({ message: 'Product not found' });
    expect(status).to.deep.equal(404);
  });

  // it('Se ao passar um id que não existe recebe msg de error', async function () {
  //   sinon.stub(productsService, 'getProductIdService').resolves();
  //   const result = await productsService.getProductIdService(null);
  //   expect().to.deep.equal();
  // });
});

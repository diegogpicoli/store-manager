const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);
const app = require('../../../src/app');

const connection = require('../../../src/models/connection');

const sales = require('./mocks/sales.controller.mock');

describe('Testes de unidade do controller de sales', function () {
  afterEach(sinon.restore);

  it('Recebe todas as sales', async function () {
    sinon.stub(connection, 'execute').resolves([sales.allSales]);
    const { body, status } = await chai.request(app).get('/sales');
    expect(body).to.deep.equal(sales.allSales);
    expect(status).to.deep.equal(200);
  });

  it('Recebe o sale com id correto', async function () {
    const { body, status } = await chai.request(app).get('/sales/1');
  });

  it('Mensagem de error se o produto não existir', async function () {
    sinon.stub(connection, 'execute').resolves([sales.salesId]);
    const { body, status } = await chai.request(app).get('/sales/1');
    expect(body).to.deep.equal({ message: 'Sale not found' });
    expect(status).to.deep.equal(404);
  });

  // it('Adiciona uma sales ao banco de dado', async function () {
  //   sinon.stub(connection, 'execute').resolves();
    
  //   const { body, status } = await chai.request(app).post('/sales').send(sales.salesBody)
  // });
});

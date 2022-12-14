const products = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
]



const productsAll = {
  type: null,
  message: [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' }
  ]
}

const productsId = { type: null, message: { id: 1, name: 'Martelo de Thor' } }

const msgError = { type: 'NOT_FOUND', message: 'Product not found' }

module.exports = {
  productsAll,
  productsId,
  products,
  msgError,
}
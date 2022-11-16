const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares/products.middlewares');

const router = express.Router();

router.get('/', controllers.getAllProducts);

router.get('/:id', controllers.getAllProductsId);

router.post('/', middlewares.validateInsertProduct, controllers.insertProduct);

module.exports = router;
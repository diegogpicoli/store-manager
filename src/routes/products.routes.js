const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares/products.middlewares');

const router = express.Router();

router.get('/', controllers.getAllProducts);

router.get('/:id', controllers.getAllProductsId);

router.post('/', middlewares.validateInsertProduct, controllers.insertProduct);

router.put('/:id', middlewares.validateInsertProduct, controllers.attProduct);

router.delete('/:id', controllers.deleteProduct);

module.exports = router;
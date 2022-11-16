const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', controllers.getAllProducts);

router.get('/:id', controllers.getAllProductsId);

router.post('/', controllers.insertProduct);

module.exports = router;
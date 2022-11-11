const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', controllers.getAllProducts);

router.get('/:id', controllers.getAllProductsId);

module.exports = router;
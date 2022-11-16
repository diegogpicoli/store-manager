const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares/sales.middlewares');

const router = express.Router();

router.get('/', controllers.getAllSales);

router.get('/:id', controllers.getSalesId);

router.post('/', middlewares.validateInsertSales, controllers.insertSales);

module.exports = router;
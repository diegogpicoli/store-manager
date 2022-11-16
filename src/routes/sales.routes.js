const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares/sales.middlewares');

const router = express.Router();

router.post('/', middlewares.validateInsertSales, controllers.insertSales);

module.exports = router;
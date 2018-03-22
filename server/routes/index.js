const express = require('express');
const customer = require('./customer');

const router = express.Router();

router.use('/customers', customer);

module.exports = router;
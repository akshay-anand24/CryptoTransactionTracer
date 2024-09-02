const express = require('express');
const { getTotalExpenses } = require('../controllers/expenseController');

const router = express.Router();

router.get('/:address', getTotalExpenses);

module.exports = router;

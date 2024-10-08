const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    address: { type: String, required: true },
    transactions: { type: Array, required: true },
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

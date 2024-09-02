const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    currency: { type: String, required: true },
    price: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Price = mongoose.model('Price', priceSchema);

module.exports = Price;

const Transaction = require('../models/transaction');
const Price = require('../models/price');

const getTotalExpenses = async (req, res) => {
    const address = req.params.address;

    try {
        // Fetch transactions from the database for the given address
        const transactionsData = await Transaction.findOne({ address }).sort({ timestamp: -1 });;
        if (!transactionsData) {
            return res.status(404).json({ error: 'No transactions found for this address' });
        }

        // Calculate total expenses
        const transactions = transactionsData.transactions;
        const totalExpenses = transactions.reduce((acc, tx) => {
            const expense = (tx.gasUsed * tx.gasPrice) / 1e18; // Convert to Ether
            return acc + expense;
        }, 0);

        // Fetch the latest Ethereum price from the database
        const latestPriceData = await Price.findOne().sort({ timestamp: -1 });
        if (!latestPriceData) {
            return res.status(404).json({ error: 'Ethereum price data not available' });
        }

        const currentPrice = latestPriceData.price;

        // Return the total expenses and current Ethereum price
        res.json({ totalExpenses, currentPrice });
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getTotalExpenses };

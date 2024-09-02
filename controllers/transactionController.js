const Transaction = require('../models/transaction');


const getTransactions = async (req, res) => {
    const address = req.params.address;
    try {
        const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`);
        const data = await response.json();
        const transactions = data.result;

        // Store transactions in MongoDB
        // const newTransaction = new Transaction({ address, transactions });
        // await newTransaction.save();
        console.log(address)

        res.json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).send('Error fetching transactions');
    }
};

module.exports = { getTransactions };

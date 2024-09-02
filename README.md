This project is a Node.js-based API that allows users to fetch their Ethereum transactions, calculate their total expenses, and retrieve the current price of Ethereum.
The project uses MongoDB for storing transaction and price data.

## Features
Fetch Ethereum Transactions: Retrieve a list of Ethereum transactions for a given address.
Calculate Total Expenses: Calculate the total expenses of a user based on their Ethereum transactions.
Fetch Current Ethereum Price: Retrieve the current price of Ethereum from CoinGecko and store it in the database every 10 minutes.
View Expenses and Current Price: Get the total expenses and the current price of Ethereum for a given address.

# API Endpoints:
1. ## Fetch Transactions
Endpoint: GET /api/transactions/:address
Description: Fetches and stores Ethereum transactions for the given address.
GET http://localhost:3000/api/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d
URL:https://cryptotransactiontracer.onrender.com/api/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d)

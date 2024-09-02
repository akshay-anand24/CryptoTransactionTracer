# Crypto Transaction Tracer
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
GET URL:https://cryptotransactiontracer.onrender.com/api/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d)

2. ## Get Total Expenses and Current Price
Endpoint: GET /api/expenses/:address
Description: Returns the total expenses for the given address based on their transactions and the current price of Ethereum.
GET URL: https://cryptotransactiontracer.onrender.com/api/expenses/0xce94e5621a5f7068253c42558c147480f38b5e0d

3. ##  Fetch Ethereum Price (Internal Task)
Description: The system fetches the current Ethereum price from CoinGecko every 10 minutes and stores it in the database. This runs automatically and does not have a public endpoint.

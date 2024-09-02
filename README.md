# Crypto Transaction Tracer
This project is a Node.js-based API that allows users to fetch their Ethereum transactions, calculate their total expenses, and retrieve the current price of Ethereum.
The project uses MongoDB for storing transaction and price data.

### Deployed Home Route: https://cryptotransactiontracer.onrender.com/

## Features
Fetch Ethereum Transactions: Retrieve a list of Ethereum transactions for a given address.
Calculate Total Expenses: Calculate the total expenses of a user based on their Ethereum transactions.
Fetch Current Ethereum Price: Retrieve the current price of Ethereum from CoinGecko and store it in the database every 10 minutes.
View Expenses and Current Price: Get the total expenses and the current price of Ethereum for a given address.

# Installation Procedure:
1. Clone the repository
2. Install Dependencies
3. Setup Environment Variables
4. Start the server (nodemon index.js or npm start)

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


## How It Works
1. Fetching Ethereum Transactions:
Users can fetch their Ethereum transactions by providing their address. The transactions are retrieved using the Etherscan API and stored in the MongoDB database.

2. Fetching Ethereum Price:
Every 10 minutes, the system fetches the latest Ethereum price from CoinGecko and stores it in the database. This allows the system to provide up-to-date pricing information.

3. Calculating Expenses:
The expense for each transaction is calculated as gasUsed * gasPrice / 1e18 (in Ether). The total expense is aggregated for all transactions of the given address.

4. Getting Total Expenses and Current Price:
Users can get their total expenses and the current Ethereum price in a single API call by providing their address.

# Screenshots of APIs
1. GET /api/transactions/:address
 ![image](https://github.com/user-attachments/assets/3dd5d9fd-8b4b-48a0-90b0-c58135a6897f)

2. GET /api/expenses/:address 
![image](https://github.com/user-attachments/assets/92bf0c8d-9d17-4157-8207-b96ec806379c)


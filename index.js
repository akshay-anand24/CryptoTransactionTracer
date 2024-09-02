const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const transactionRoutes = require('./routes/transactionRoutes');
const expenseRoutes = require('./routes/expenseRoutes'); 
require('./controllers/priceFetcher')

const app = express();
const port = 3000;

// MongoDB connection

    mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB:', err);
});
// Use routes
app.use('/api/transactions', transactionRoutes);
app.use('/api/expenses', expenseRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

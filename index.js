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
app.get('/',(req,res)=>{
    res.send({"Message":"Visit these URLs",
        'URL1':`https://cryptotransactiontracer.onrender.com/api/expenses/0xce94e5621a5f7068253c42558c147480f38b5e0d`,
         'URL2':`https://cryptotransactiontracer.onrender.com/api/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d`
    })
})
app.use('/api/transactions', transactionRoutes);
app.use('/api/expenses', expenseRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

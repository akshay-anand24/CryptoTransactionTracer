const Price = require('../models/price');

const fetchAndStorePrice = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
        const data = await response.json();
        const ethPriceInInr = data.ethereum.inr;

        const newPrice = new Price({
            currency: 'INR',
            price: ethPriceInInr
        });

        await newPrice.save();
        console.log(`Fetched and stored Ethereum price: ${ethPriceInInr} INR`);
    } catch (error) {
        console.error('Error fetching Ethereum price:', error);
    }
};

// Fetch price immediately upon server start
fetchAndStorePrice();

// Set interval to fetch price every 10 minutes (600000 milliseconds)
setInterval(fetchAndStorePrice, 600000);

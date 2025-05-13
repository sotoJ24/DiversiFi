// api.js - Express.js API for Asset Diversifier
const express = require('express');
const app = express();
app.use(express.json());

// Simulate AI Recommendation Endpoint
app.post('/simulate-ai-recommendation', (req, res) => {
    const { budget } = req.body;

    if (!budget || budget <= 0) {
        return res.status(400).json({ message: "Invalid budget amount." });
    }

    // Simulate AI recommendation with random percentages
    const tokens = ["ETH", "USDT", "BTC", "MATIC", "LINK"];
    let remaining = 100;
    const percentages = tokens.map((token, index) => {
        if (index === tokens.length - 1) return remaining; // Last token gets the remaining percentage

        const randomPercentage = Math.floor(Math.random() * (remaining - (tokens.length - index - 1))) + 1;
        remaining -= randomPercentage;
        return randomPercentage;
    });

    // Calculate allocations
    const allocations = tokens.map((token, index) => {
        return {
            token,
            percentage: percentages[index],
            amount: (budget * percentages[index]) / 100
        };
    });

    res.json({ budget, allocations });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

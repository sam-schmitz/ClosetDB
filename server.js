//server.js
//By: Sam Schmitz

const ClothesDBManager = require('./MongoConnect')
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

let filter = {
    "categories.type": "shirt"
};

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.get('/api/clothes', async (req, res) => {
    try {
        const clothes = await ClothesDBManager.findClothes(filter);
        res.json(clothes);
    } catch (error) {
        console.error('Error fetching clothes:', error);
        res.status(500).json({ message: 'An error ocurred while fetching clothes' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

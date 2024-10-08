//server.js
//By: Sam Schmitz

const ClothesDBManager = require('./MongoConnect')
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.get('/api/clothes', async (req, res) => {
    try {
        const clothingFilter = {};
        console.log(req.query)
        clothingFilter.color = req.query.color;
        const clothes = await ClothesDBManager.findClothes(req.query);
        res.json(clothes);
    } catch (error) {
        console.error('Error fetching clothes:', error);
        res.status(500).json({ message: 'An error ocurred while fetching clothes' });
    }
});

app.post('/api/clothes', async (req, res) => {
    try {
        const garment = await ClothesDBManager.addClothing(req.body);
        res.send(garment);
    } catch (error) {
        console.error('Error adding garment:', error);
        res.status(500).json({ message: 'An error ocurred while addding the garment' });
    }
});

app.delete('/api/clothes', async (req, res) => {
    try {
        const deletion = await ClothesDBManager.deleteGarment(req.body);
        res.send(deletion);
    } catch (error) {
        console.error('Error deleting garment:', error);
        res.status(500).json({message: 'An error ocurred while deleting the garment'})
    }
});

app.patch('/api/clothes', async (req, res) => {
    try {
        const mod = await ClothesDBManager.modifyGarment(req.query, req.body);
        res.send(mod);
    } catch (error) {
        console.error('Error while modifying garment: ', error);
        res.status(500).json({ message: 'An error ocurred while modifying the garment' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

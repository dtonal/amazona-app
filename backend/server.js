import express from "express";
import data from './data.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Server up and runing')
})

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/api/product/:id', (req, res) => {
    res.send(data.products.find(p => p._id === req.params.id));
})


app.listen(5000, () => {
    console.log('Serve at http://localhost:5000')
})
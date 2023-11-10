const express = require('express');
const cors = require('cors');
const { listarMenu, novoPedido } = require('./controllers/menuControllers');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/menu', listarMenu);

app.post('/menu/cardapio', novoPedido);

module.exports = app;
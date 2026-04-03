const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const pedidosRoutes = require('./routes/pedidos.roubtes');

app.use('/pedidos', pedidosRoutes);

module.exports = app;
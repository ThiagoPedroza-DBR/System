const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const pedidosRoutes = require('./routes/pedidos.routes');

app.use('/pedidos', pedidosRoutes);

module.exports = app;
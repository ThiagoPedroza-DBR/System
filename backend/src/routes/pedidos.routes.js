const express = require('express');
const router = express.Router();

const pedidosController = require('../controllers/pedidos.controller');

router.get('/', pedidosController.listar);
router.post('/', pedidosController.criar);

module.exports = router;
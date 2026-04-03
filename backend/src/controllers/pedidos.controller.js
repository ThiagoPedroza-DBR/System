const db = require('../connfig/db');

exports.getPedidos = (req, res) => {
    try {
        const result = await db.query('SELECT * FROM pedidos');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createPedido = async (req, res) => {
    try {
        const { cliente_id, produto_id, quantidade } = req.body;
        const result = await db.query(
            'INSERT INTO pedidos (cliente_nome, largura, tecido, status) VALUES ($1, $2, $3) RETURNING *',
            [cliente_id, produto_id, quantidade]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
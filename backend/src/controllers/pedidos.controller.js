const db = require('../config/db');

exports.listar = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM pedidos');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};
exports.criar = async (req, res) => {
    try {
        const { cliente_id, largura,altura, tecido } = req.body;

        const result = await db.query(
            'INSERT INTO pedidos (cliente_id, largura, altura, tecido, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [cliente_id, largura, altura, tecido, 'em produção']
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};
// controllers/restauranteController.js

const {Restaurante} = require('../models');

module.exports = class restauranteController {
    static async create(req, res) {
        try {
            const restaurante = await Restaurante.create({
                nome: req.body.nome,
                tipo: req.body.tipo,
                endereco: req.body.endereco
            });
            return res.status(200).json({ restaurante });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    static async getAll(req, res) {
        try {
            const restaurantes = await Restaurante.findAll();
            return res.status(200).json({ restaurantes });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    static async getById(req, res) {
        try {
            const restaurante = await Restaurante.findByPk(req.params.id);
            if (!restaurante) {
                return res.status(500).json({ error: 'Restaurante não encontrado' });
            }
            return res.status(200).json({ restaurante });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    static async update(req, res) {
        try {
            const restaurante = await Restaurante.findByPk(req.params.id);
            if (!restaurante) {
                return res.status(500).json({ error: 'Restaurante não encontrado' });
            }
            await restaurante.update({
                nome: req.body.nome,
                tipo: req.body.tipo,
                endereco: req.body.endereco
            });
            return res.status(200).json({ restaurante });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    static async delete(req, res) {
        try {
            const restaurante = await Restaurante.findByPk(req.params.id);
            if (!restaurante) {
                return res.status(500).json({ error: 'Restaurante não encontrado' });
            }
            await restaurante.destroy();
            return res.status(200).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};

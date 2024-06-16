// controllers/avaliacaoController.js

const {Avaliacao} = require('../models');

module.exports = class avaliacaoController {
  static async create(req, res) {
    try {
      const avaliacao = await Avaliacao.create({
        restaurandeId: req.body.restaurandeId,
        nota: req.body.nota,
        comentario: req.body.comentario
      });
      return res.status(200).json({ avaliacao });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const avaliacoes = await Avaliacao.findAll();
      return res.status(200).json({ avaliacoes });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (!avaliacao) {
        return res.status(500).json({ error: 'Avaliação não encontrada' });
      }
      return res.status(200).json({ avaliacao });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (!avaliacao) {
        return res.status(500).json({ error: 'Avaliação não encontrada' });
      }
      await avaliacao.update({
        restaurandeId: req.body.restaurandeId,
        nota: req.body.nota,
        comentario: req.body.comentario
      });
      return res.status(200).json({ avaliacao });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (!avaliacao) {
        return res.status(500).json({ error: 'Avaliação não encontrada' });
      }
      await avaliacao.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

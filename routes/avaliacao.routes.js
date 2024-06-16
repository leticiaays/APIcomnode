const express = require('express');
const avaliacaoController = require('../controllers/avaliacaoController');
const router = express.Router();

router.post('/avaliacoes', avaliacaoController.create);
router.get('/avaliacoes', avaliacaoController.getAll);
router.get('/avaliacoes/:id', avaliacaoController.getById);
router.put('/avaliacoes/:id', avaliacaoController.update);
router.delete('/avaliacoes/:id', avaliacaoController.delete);

module.exports = router;
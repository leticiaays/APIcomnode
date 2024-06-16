const express = require('express');
const restauranteController = require('../controllers/restauranteController');
const router = express.Router();

router.post('/restaurantes', restauranteController.create);
router.get('/restaurantes', restauranteController.getAll);
router.get('/restaurantes/:id', restauranteController.getById);
router.put('/restaurantes/:id', restauranteController.update);
router.delete('/restaurantes/:id', restauranteController.delete);

module.exports = router;
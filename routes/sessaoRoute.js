const express = require('express');
const router = express.Router();
const sessaoController = require('../controllers/sessaoController');
const controller = new sessaoController();

router.get('/', controller.sessaoView);
router.get('/cadastrar', controller.cadastrarView);
router.post('/cadastrar', controller.cadastrar);
router.post('/excluir', controller.excluir);

module.exports = router;
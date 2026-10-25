const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
const middleware = require("../middlewares/authMiddleware")
const auth = new middleware()


let ctrl = new UsuarioController();
const router = express.Router();
router.get('/', auth.verificarUsuarioLogado, ctrl.listagemView);
router.get('/cadastrar', auth.verificarUsuarioLogado, ctrl.cadastroView);
router.post('/cadastrar', ctrl.cadastrar);
router.get('/alterar/:id', auth.verificarUsuarioLogado, ctrl.alterarView);
router.post("/alterar", ctrl.alterar);
router.post("/excluir", ctrl.excluir);

module.exports = router;
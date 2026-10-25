const express = require('express');
const FilmeController = require('../controllers/filmeController');
const middleware = require("../middlewares/authMiddleware")
const auth = new middleware()

const router = express.Router();

let ctrl = new FilmeController();
router.get('/', auth.verificarUsuarioLogado, ctrl.listarView);

module.exports = router;
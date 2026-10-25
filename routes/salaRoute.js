const express = require('express');
const SalaController = require('../controllers/salaController');
const middleware = require("../middlewares/authMiddleware")
const auth = new middleware()

const router = express.Router();

let ctrl = new SalaController()
router.get('/', auth.verificarUsuarioLogado, ctrl.listarView);


module.exports = router;
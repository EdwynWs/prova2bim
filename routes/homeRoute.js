const express = require('express');
const HomeController = require('../controllers/homeController');
const middleware = require("../middlewares/authMiddleware")
const auth = new middleware()

const router = express.Router();

let ctrl = new HomeController();
router.get('/', auth.verificarUsuarioLogado, ctrl.homeView);

module.exports = router;
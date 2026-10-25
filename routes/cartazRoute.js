const express = require('express');
const CartazController = require('../controllers/cartazController');


const router = express.Router();

let ctrl = new CartazController()
router.get('/', ctrl.listarView);
router.post('/', ctrl.cadastrarReserva)

module.exports = router;

const SalaModel = require("../models/salaModel");

class SalaController {

    async listarView(req, res) {
        let sala = new SalaModel()
        let lista = await sala.listar();
        res.render('sala/listar', { lista: lista});
    }
}


module.exports = SalaController;
const FilmeModel = require("../models/filmeModel");

class FilmeController {

    async listarView(req, res) {
        let imov = new FilmeModel();
        let lista = await imov.listar();
        res.render('filme/listar', {lista: lista});
    }
}


module.exports = FilmeController;
const SessaoModel = require("../models/sessaoModel");
const reservaModel = require("../models/reservaModel")
class CartazController {


    async listarView(req, res) {
        let sessao = new SessaoModel();
        let lista = await sessao.listar();
        res.render('cartaz/index', { layout: 'cartaz/index', lista: lista});
    }


        async cadastrarReserva(req, res){
        var ok = true;
        if(req.body.data != null && req.body.preco != "0" && req.body.filmeId != "0" && req.body.salaId  != '0') {
            let produto = new reservaModel(0, req.body.data, req.body.preco, req.body.filmeId, req.body.salaId);
            ok = await produto.cadastrar();
        }
        else{
            ok = false;
        }

        res.send({ ok: ok })
    }
}

module.exports = CartazController

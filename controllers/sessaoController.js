const sessoesModel = require('../models/sessaoModel');

class sessaoModel{

    async sessaoView(req, res){
        let lista = new sessoesModel()
        let listar = await lista.listar();
        res.render('sessao/listar', {listar});
    }
    async cadastrarView(req, res){
        let lista = new sessoesModel()
        let listar = await lista.listar();
        res.render('sessao/cadastrar', {listar});
    }

    async cadastrar(req, res){
        let ok = false;
        console.log(req.body);
        if(req.body.datahora != '' && req.body.preco != '' && req.body.filme != '0' && req.body.sala != ''){
            let cad = new sessoesModel(0, req.body.datahora, req.body.preco, req.body.filme, req.body.sala);
            let cadastro = await cad.cadastrar();
            if(cadastro){
                res.send({ok: cadastro, msg: 'Sessão Cadastrada com sucesso'});
            }else{
                res.send({ok: false, msg: 'Erro ao cadastrar sessão'})
            }
            
        }else{
            res.send({ok: false, msg: 'Erro ao cadastrar sessão'})
        }
    }

    async excluir(req, res){
        if(req.body.id != null){
            let sessao = new sessoesModel()
            let ok = await sessao.excluir(req.body.id);
            if(ok){
                res.send({ok: true});
            }else{
                res.send({ok: false, msg: 'Erro ao excluir sessão'})
            }
        }else{
            res.send({ok: false, msg: 'Sessão não encontrada'})
        }
    }
}
module.exports = sessaoModel;
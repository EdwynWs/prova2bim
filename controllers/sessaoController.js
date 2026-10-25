const sessaoModel = require("../models/sessaoModel")

class sessaoController{

    async sessaoView(req, res){
        let sessao = new sessaoModel()
        let lista = await sessao.listar()
        res.render("sessao/listar", {lista: lista})
    }

    async cadastrarView(req, res){
        let sessao = new sessaoModel()
        let lista = await sessao.listar()
        res.render("sessao/cadastrar", {lista: lista})
    }



    async excluir(req, res){
        let ok = true
        if(req.body.id != ""){
            let sessao = new sessaoModel();
            ok = await sessao.excluir(req.body.id)
        }else{
            ok = false
        }
        res.send({ok: ok})
    }

    async cadastrar(req, res){
        let msg = "";
        let cor = "";
        if(req.body.email != "" && req.body.senha != "" && req.body.nome != "" &&
            req.body.perfil != '0') {
            let usuario = new UsuarioModel(0, req.body.nome, req.body.email, req.body.senha, req.body.ativo, req.body.perfil);

            let result = await usuario.cadastrar();

            if(result) {
                resp.send({
                    ok: true,
                    msg: "Usuário cadastrado com sucesso!"
                });
            }   
            else{
                resp.send({
                    ok: false,
                    msg: "Erro ao cadastrar usuário!"
                });
            }
        }
        else
        {
            resp.send({
                ok: false,
                msg: "Parâmetros preenchidos incorretamente!"
            });
        }


    }

}
module.exports = sessaoController
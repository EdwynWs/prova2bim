const Database = require('../db/database');

const conexao = new Database();

class FilmeModel {

    #id;
    #titulo;
    #duracao;
    #sinopse;
    #anoLancamento;
    #generoId;
    #generoDescricao;

    get id() { return this.#id; } set id(id) {this.#id = id;}
    get titulo() { return this.#titulo; } set titulo(titulo) {this.#titulo = titulo;}
    get duracao() { return this.#duracao; } set duracao(duracao) {this.#duracao = duracao;}
    get sinopse() { return this.#sinopse; } set sinopse(sinopse) {this.#sinopse = sinopse;}
    get anoLancamento() { return this.#anoLancamento; } set anoLancamento(anoLancamento) {this.#anoLancamento = anoLancamento;}
    get generoId() { return this.#generoId; } set generoId(generoId) {this.#generoId = generoId;}
    get generoDescricao() { return this.#generoDescricao; } set generoDescricao(generoDescricao) {this.#generoDescricao = generoDescricao;}

    constructor(id, titulo, duracao, sinopse, anoLancamento, generoId, generoDescricao) {
        this.#id = id
        this.#titulo = titulo
        this.#duracao = duracao
        this.#sinopse = sinopse
        this.#anoLancamento = anoLancamento;
        this.#generoId = generoId;
        this.#generoDescricao = generoDescricao;
    }

    async listar() {


        let sql = 'select * from tb_filmes f inner join tb_generos g on f.gen_id = g.gen_id';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                let row = rows[i];
                listaRetorno.push(new FilmeModel(row['fil_id'], 
                row['fil_titulo'], row['fil_duracaominutos'], row['fil_sinopse'], 
                row['fil_anolancamento'], row["gen_id"], row["gen_descricao"]));
            }
        }

        return listaRetorno;
    }

}

module.exports = FilmeModel;
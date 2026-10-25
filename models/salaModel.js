const Database = require('../db/database');

const conexao = new Database();

class SalaModel {

    #id;
    #nome;
    #capacidade;

    get id() { return this.#id; } set id(id) {this.#id = id;}
    get nome() { return this.#nome; } set nome(nome) {this.#nome = nome;}
    get capacidade() { return this.#capacidade; } set capacidade(capacidade) {this.#capacidade = capacidade;}

    constructor(id, nome, capacidade) {
        this.#id = id
        this.#nome = nome
        this.#capacidade = capacidade
    }

    async listar() {


        let sql = 'select * from tb_salas';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                let row = rows[i];
                listaRetorno.push(new SalaModel(row['sal_id'], 
                row['sal_nome'], row['sal_capacidade']));
            }
        }

        return listaRetorno;
    }

}
module.exports = SalaModel;
const banco = require('../db/database');
const db = new banco();

class sessaoModel{

    #id;
    #datahora;
    #preco;
    #filmId;
    #salaId;
    #filmNome;
    #salaNome;

    get id(){
        return this.#id;
    }
    set id(value){
        this.#id = value;
    }

    get datahora(){
        return this.#datahora;
    }
    set datahora(value){
        this.#datahora = value;
    }

    get preco(){
        return this.#preco;
    }
    set preco(value){
        this.#preco = value;
    }

    get filmId(){
        return this.#filmId;
    }
    set filmId(value){
        this.#filmId = value;
    }

    get salaId(){
        return this.#salaId;
    }
    set salaId(value){
        this.#salaId = value;
    }

    get filmNome(){
        return this.#filmNome;
    }
    set filmNome(value){
        this.#filmNome = value;
    }

    get salaNome(){
        return this.#salaNome;
    }
    set salaNome(value){
        this.#salaNome = value;
    }

    constructor(id, datahora, preco, filmId, salaId, filmNome, salaNome){
        this.#id = id;
        this.#datahora = datahora;
        this.#preco = preco;
        this.#filmId = filmId;
        this.#salaId = salaId;
        this.#filmNome = filmNome;
        this.#salaNome = salaNome;
    }

    async listar(){
        const sql = 'select * from tb_sessoes s inner join tb_filmes f on s.fil_id = f.fil_id inner join tb_salas sa on s.sal_id = sa.sal_id';
        const rows = await db.ExecutaComando(sql);
        let lista = [];
        for(let i = 0; i < rows.length; i++){
            let result = new sessaoModel(rows[i]['ses_id'], rows[i]['ses_datahora'], rows[i]['ses_preco'], rows[i]['fil_id'], rows[i]['sal_id'], rows[i]['fil_titulo'], rows[i]['sal_nome']);
            lista.push(result);
    }
        return lista;
    }

    async cadastrar(){
        let sql = 'insert into tb_sessoes (ses_datahora, ses_preco, fil_id, sal_id) values(?,?,?,?)';
        let valores = [this.#datahora, this.#preco, this.#filmId, this.#salaId];
        let result = await db.ExecutaComandoNonQuery(sql, valores);
        if(this.#id == 0){
            return result;
        }else{
            console.log('id já cadastrado');
        }
    }

    async excluir(id){
        let sql = 'delete from tb_sessoes where ses_id = ?';
        let valores = [id];
        let result = await db.ExecutaComandoNonQuery(sql, valores);
        return result;
    }
}
module.exports = sessaoModel;
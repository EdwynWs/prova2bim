const { resourceUsage } = require("node:process")
const database = require("../db/database")
const db = new database()

class sessaoModel{

    #id    
    #data
    #preco
    #filaId
    #salaId

    get id(){
        return this.#id
    }
    set id(id){
        this.#id = id
    }

    get data(){
        return this.#data
    }
    set data(data){
        this.#data = data
    }

    get preco(){
        return this.#preco
    }
    set preco(preco){
        this.#preco = preco
    }

    get filaId(){
        return this.#filaId
    }
    set filaId(filaId){
        this.#filaId = filaId
    }

    get salaId(){
        return this.#salaId
    }
    set salaId(salaId){
        this.#salaId = salaId
    }

    constructor(id, data, preco, filaId, salaId){
        this.#id = id;
        this.#data = data;
        this.#preco = preco;
        this.#filaId = filaId;
        this.#salaId = salaId;
    }

    async listar(){
        let sql = 'select * from tb_sessoes'
        let result = db.ExecutaComando(sql)
        return result;
    }

    async excluir(id){
        let sql = "delete from tb_sessoes where ses_id = ?"
        let valores = [id];
        let result = await db.ExecutaComandoNonQuery(sql, valores)
        return result;
    }

    async cadastrar(){
        let sql = 'insert into tb_sessoes(ses_id, ses_datahora, ses_preco, fil_id, sal_id) values (?, ?, ?, ?, ?)'
        let valores = [this.#id, this.#data, this.#preco, this.#filaId, this.#salaId]
        let result = await db.ExecutaComando(sql, valores)
        return result;
    }


}
module.exports = sessaoModel
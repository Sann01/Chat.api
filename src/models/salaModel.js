const { connect } = require("../api");
const db = require("./db");
function listarSalas(){
    return db.findAll("salas");
}
listarSalas()
{
    return[
        {
            "_id":{
                "$oid":"1"
            },
            "nome":"Guerreiros da info",
            "tipo":"publica"
        },{
            "id":{
                "$oid":"2"
            },
            "nome":"Moderadores da sala",
            "tipo":"privada",
            "chave":"ElModder@.seq302"
        },{
            "id":{
                "$oid":"3"
            },
            "nome":"Counter23",
            "tipo":"publica",
        }
       
    ]
}
module.exports = {listarSalas}
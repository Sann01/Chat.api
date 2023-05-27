const db = require("./db");
function listarSalas(){
    return db.findAll("salas");
}

let buscarSala = async (idsala)=>{
    return db.findOne("salas",idsala);
}
let atualizarMensagens = async (sala)=>{
    return await db.updateOne("salas", sala, {_id:sala._id},sala);
};

let buscarMensagens = async (idsala, timestamp)=>{
    let sala = await buscarSala(idsala);
    if(sala.msgs){
        let msgs=[];
        sala.msgs.forEach((msg)=>{
            if(msg.timestamp >= timestamp){
                msgs.push(msg);
            }
        });
        return msgs;
    }
    return[];
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

module.exports = {listarSalas,atualizarMensagens,buscarMensagens}
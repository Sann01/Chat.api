const db = require("./db");

async function registrarUsuario(nick) {
  return await db.insertOne("usuario", { "nick": nick });
}

async function buscarUsuario(iduser) {
  let user = await db.findOne("usuario", iduser);
  return user;
}

async function alterarUsuario(user) {
  return await db.updateOne("usuario", user, { _id: user._id });
}

module.exports = {
  registrarUsuario,
  buscarUsuario,
  alterarUsuario
};
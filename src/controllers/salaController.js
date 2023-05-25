const salaModel = require("../models/salaModel");

exports.get=()=>{
   let salaModel = require("../models/salaModel");
   return salaModel.listarSalas();
}

exports.get=async()=>{
   return await salaModel.listarSalas();
}

exports.get = async(req,res)=>{
   return{"status":"OK", "controller":"Sala"};
}







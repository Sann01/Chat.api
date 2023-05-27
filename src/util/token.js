const jwt = require('jsonwebtoken');

const checktoken = async (token, id, key) => jwt.verify(token, key,(err,decoded)=>{
    const generateToken = (payload, key) => {
        return jwt.sign(payload, key);
      };
      const token = generateToken({ id: 'user123' }, 'sua_chave_privada');
console.log(token);
});

const setToken = async (id, key)=>{
    console.log(id);
    if(id){
        return jwt.sign({id},key,{expiresIn:28800});
    }
    return false;
};

module.exports = {checktoken,setToken};
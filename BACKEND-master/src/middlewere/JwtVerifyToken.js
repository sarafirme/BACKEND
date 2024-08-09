const jwt = require('jsonwebtoken');


const JwtVerifyToken = (request, response, next) => {
    let token = request.headers.authorization.split(' ');
    token = token ? token[1] : ''

    if (!token) {
       return response.json({ message: "Token inválido!", sucess: false})
    }
    try{
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
    }catch(error){
        response.status(403);
        return response.json({
            message: "Usuario não autorizado"
        })
    }
    next();
}
module.exports = JwtVerifyToken;
//Só passa para o controller depois dessa verificação/ next()
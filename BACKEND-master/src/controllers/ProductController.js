const ProductModel = require("../models/ProductModel");
const jwt = require('jsonwebtoken')


const ProductController = {
    create(request, response) {
        ProductModel.create(request.body);
        return response.json({
            message: "Produto cadastrado com sucesso!"
        })
    },
    async list(request, response){
        const products = await ProductModel.findAll()
        response.json(products);
    }

    /*async list(request, response) {
        let token = request.headers.authorization.split(' ');
        token = token ? token[1] : ''

        if (!token) {
            response.json({ message: "Token inválido!", sucess: false })
        } else {
            // let authSecret = process.env.JWT_SECRET - POSSO USAR ASSIM TBM
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                console.log(decoded);
                const products = await ProductModel.findAll({
                    where: { user_id: decoded.id } //Filtra os produtos por usuário
                }); //findByPk()
                response.json(products);

            } catch (error) {
                // console.log(error.name);
                // console.log (Object.getOwnPropertyNames(error)); //pega o Nome das propriedades do meu objeto, nesse caso (error)
                if(error.name === 'SequelizeDatabaseError'){
                    return response.json({
                        message: 'Ocorreu um error no servidor'
                    });
                }
                return response.json({
                    message: error.message
                })

            }

        }
    }*/
}

module.exports = ProductController
// header chave - valor
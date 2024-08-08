const ProductModel = require ("../models/ProductModel");
const jwt = require ('jsonwebtoken')


const ProductController = {
    create(request, response){
        ProductModel.create(request.body);
        return response.json({
            message:"Produto cadastrado com sucesso!"
        })
    },
    async list(request, response){
        let token = request.headers.authorization.split(' ');
        token = token[1];

        let authSecret = 'jkdbfjfbdjfbsdkpk'

        const decoded = jwt.verify(token, authSecret);

        console.log(decoded);

        const products = await ProductModel.findAll(); //findByPk()
        response.json(products);
    }
}

module.exports = ProductController
// header chave - valor
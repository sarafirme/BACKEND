const ProductModel = require ("../models/ProductModel");


const ProductController = {
    create(request, response){
        ProductModel.create(request.body);
        return response.json({
            message:"Produto cadastrado com sucesso!"
        })
    },
    async list(request, response){
        const products = await ProductModel.findAll(); //findByPk()
        response.json(products);
    }
}

module.exports = ProductController
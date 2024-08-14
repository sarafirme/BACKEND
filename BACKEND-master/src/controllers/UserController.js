const UserModel = require('../models/UserModel');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const ProductModel = require('../models/ProductModel');

UserModel.hasMany(ProductModel, { foreignKey: 'user_id' });


const UserController = {
    async create(request, response) {

        let hash = await bcrypt.hash(request.body.password, 2);
        request.body.password = hash;

        UserModel.create(request.body);
        messageReturn = 'Usuario criado com sucesso!'

        response.status(201)
        return response.json({
            message: messageReturn
        });

    },
    async login(request, response) {
        let email = request.body.email;
        let password = request.body.password;
        let messageCompare = '';
        // let authSecret = process.env.JWT_SECRET - POSSO USAR ASSIM TBM

        //Controle para tornar email e senhas obrigatórios
        if (!email || !password) {
            messageCompare = 'email e senha são obrigatórios!'
        } else {
            let user = await UserModel.findOne({
                where: { email }
            });


            let userPassword = user ? user.password : ''
            let hasValid = await bcrypt.compare(password, userPassword);
            //Lógica para criação do token válido por 8h
            const expiresIn = '8h'
            const token = hasValid ? jwt.sign({
                id: user.id, name: user.firstname, email: user.email
            }, process.env.JWT_SECRET, {
                expiresIn
            }) : 'Usuário ou senha inválido!'
            messageCompare = token
        }
        response.json({
            message: messageCompare
        })
    },

    async list(request, response) {
        //linha 6
        const users = await UserModel.findAll({
            include: ProductModel
        });

        return response.json(users);

        /*//retorna um array de promisse
        //[promisse, promisse, promisse]
        let result = users.map(async(user) => {
            let products = await ProductModel.findAll({
                where:{
                    user_id: user.id
                }
            })
            return {
                ...user.dataValues, //(...(spread syntax) retorna um objeto com tudo da linha 62 mais a linha 63)
                products:products
            }
        });

        result = await Promise.all(result); //Esperando que todas as promisses do meu array finalizar
        response.json(result);*/

        // const products = await ProductModel.findAll({
        //     where: {
        //         user_id: users.id
        //     }
        // });

        // users.setDataValue('products', products)+
        

    },

    async update(request, response) {
        let id = request.params.id;
        UserModel.update(request.body, {
            where: {
                id //mesmo que id:id
            }
        });
        return response.json({
            message: "Usuario atualizado com sucesso!!"
        })
    },
    async delete(request, response) {
        let id = request.params.id;
        UserModel.destroy({
            where: { id }
        });
        return response.json({
            message: "Usuario deletado com sucesso!!"
        })
    }
}

module.exports = UserController;



// atribuição de valor dentro do obejto :
// atribuição de valor fora = 
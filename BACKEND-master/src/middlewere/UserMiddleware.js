const { where } = require('sequelize');
const UserModel = require('../models/UserModel');



const UserCreateValidation = async (request, response, next) => {

    let messageReturn = ''

    if (!request.body.firstname || !request.body.surname || !request.body.email || !request.body.password) {
        messageReturn = 'firstname, surname, email, password são dados obrigatórios!'
        return response.status(400).json({
            message: messageReturn
        })
    }
    const email = request.body.email;

    const emailReq = await UserModel.findOne({
        where: { email }
    });

    if (emailReq && emailReq.dataValues.id > 0) {
        messageReturn = 'Email já cadastrado!'
        return response.status(400).json({
            message: messageReturn
        })

    }
    next();
}

module.exports = UserCreateValidation;
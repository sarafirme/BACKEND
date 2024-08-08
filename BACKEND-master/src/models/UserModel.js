const connection = require('../database/connection');
const {DataTypes} = require('sequelize')



//criando tabela/model diretamente aqui
//DataTypes define o tipo da coluna
//define: cria/define uma tabela

let UserModel = connection.define("User", {
    firstname: {
        type: DataTypes.STRING(50), //VARCHAR(50)
        allowNull: false, // NOT NULL
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

});
//nesse ponto sincroniza com o db
// user.sync()

module.exports = UserModel;
const connection = require('../database/connection');
const {DataTypes} = require('sequelize');


//criando tabela/model diretamente aqui
//DataTypes define o tipo da coluna
//define: cria/define uma tabela

let CategoryModel = connection.define("Category", {
    name: DataTypes.STRING(50)
})

//nesse ponto sincroniza com o db
// category.sync()

module.exports = CategoryModel;

const connection = require('../database/connection')
const {DataTypes} = require('sequelize');
const UserModel = require('./UserModel');

const ProductModel = connection.define("Product", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key:'id'
        },
        onDelete: 'CASCADE'
    },

    name:{ 
        type: DataTypes.STRING(255), 
        allowNull: false,
    }, //Obrigatorio

    descripition: DataTypes.TEXT, //Opcional

    price: {
        type: DataTypes.DECIMAL(5,2), //Obrigatorio
        allowNull: false,
    },

    price_with_discount: DataTypes.DECIMAL(5,2), // opcional

    enabled: {
       type: DataTypes.BOOLEAN,
       allowNull: false,
       defaultValue: 0 //Valor padrão
    }, // Obrigatorio

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 //Valor padrão
    }, //obrigatorio
});

module.exports = ProductModel;

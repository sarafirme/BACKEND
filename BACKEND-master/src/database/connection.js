const { Sequelize } = require("sequelize");

const connection = new Sequelize ({
    dialect: "mysql",
    database: "produtos",
    host:"localhost",
    port: 3306,
    username: "root",
    // password: "1234"
});

module.exports = connection;
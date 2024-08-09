const { Sequelize } = require("sequelize");
console.log(process.env);

const connection = new Sequelize ({
    dialect: process.env.DB_DRIVER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //3306
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

module.exports = connection;
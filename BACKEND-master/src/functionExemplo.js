const connection = require("./database/connection");
const { QueryTypes, DataTypes } = require('sequelize');


//sql puro queryTypes, tipos de consulta
async function execute() {
    const resultado = await connection.query('SELECT * FROM produtos', {
        type: QueryTypes.SELECT
    });
    console.log(resultado);
}
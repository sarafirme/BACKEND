//Rotas em backend
const dotenv = require("dotenv")
dotenv.config();


const express = require("express");
const app = express();

app.use(express.json()); //Plugin que tranforsma os dados que vem da requisição em json antes de ser executada a minha function

const UserController = require ('./controllers/UserController');
const ProductController = require ('./controllers/ProductController');


const ProductModel = require("./models/ProductModel");
const UserModel = require("./models/UserModel");
const UserCreateValidation = require('./middlewere/UserMiddleware');
const JwtVerifyToken = require('./middlewere/JwtVerifyToken');


app.get('/products', ProductController.list);
app.post('/products', JwtVerifyToken, ProductController.create);

app.get('/users', UserController.list);
app.post('/users', UserCreateValidation, UserController.create);
app.post('/login', UserController.login);
app.put('/users/:id', UserController.update);
app.delete('/users/:id', UserController.delete);

app.listen(3000)







 // console.log("BODY", request.body); //Conteudo/Corpo
    // console.log("QUERY", request.query);//Vem depois do ? na url
    // console.log("PARAMS", request.params);























// const UserController = require('./controllers/UserController');
// const ProductController = require ('./controllers/ProductController');

// const request = {
//     body: {
//         firstname: "Joaquim",
//         surname: "Silva",
//         email: "JoaquinSilva@gmail.com",
//         password: "1234"
//     }
// }

// // UserController.create(request);
// UserController.list();

// const request = {
//     body: {
//         name: 'Iphone',
//         descripition: "128 GB, Rose, camera 8mp",
//         price: "849.90",
//         enabled: 1,
//         stock: 10
//     }
// }

// ProductController.create(request);
// ProductController.list();





















// const UserModel = require('./models/UserModel');


// UserModel.create({
//     firstname: "Joaquim",
//     surname: "Silva",
//     email: "JoaquinSilva@gmail.com",
//     password:"1234"
// })
// UserModel.destroy({
//     where: {
//         id:2,
//     }
// }) // Excluindo linha


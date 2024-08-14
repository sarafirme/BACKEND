const dotenv = require("dotenv")
dotenv.config();

const connection = require('../database/connection');
require("../models/UserModel");
require("../models/Category");
require('../models/ProductModel');

connection.sync({force: true});


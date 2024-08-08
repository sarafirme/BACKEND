const connection = require('../database/connection');
require("../models/UserModel");
require("../models/Category");
require('../models/ProductModel');

connection.sync({alter: true});


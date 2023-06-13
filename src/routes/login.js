const express = require('express');

const LoginController = require('../controllers/LoginController');

const loginRouter = express.Router();

loginRouter.post('/', LoginController.createProduct);

module.exports = loginRouter;

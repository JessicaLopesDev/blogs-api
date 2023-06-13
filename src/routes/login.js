const express = require('express');

const LoginController = require('../controllers/LoginController');
const LoginValidation = require('../middlewares/LoginValidation');

const loginRouter = express.Router();

loginRouter.post('/', LoginValidation, LoginController.login);

module.exports = loginRouter;

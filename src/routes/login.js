const express = require('express');

const LoginController = require('../controllers/LoginController').default;

const loginRouter = express.Router();

loginRouter.post('/', LoginController.createLogin);

module.exports = loginRouter;

const express = require('express');

// const LoginController = require('../controllers/LoginController');

const loginRouter = express.Router();

loginRouter.post('/', () => console.log('oi'));

module.exports = loginRouter;
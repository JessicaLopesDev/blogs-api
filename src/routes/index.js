const { Router } = require('express');

const loginRouter = require('./login');
const userRouter = require('./user');

const appRoutes = Router();

appRoutes.use('/login', loginRouter);
appRoutes.use('/user', userRouter);

module.exports = appRoutes;

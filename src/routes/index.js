const { Router } = require('express');

const loginRouter = require('./login');
const userRouter = require('./user');
const categoriesRouter = require('./categories');

const appRoutes = Router();

appRoutes.use('/login', loginRouter);
appRoutes.use('/user', userRouter);
appRoutes.use('/categories', categoriesRouter);

module.exports = appRoutes;

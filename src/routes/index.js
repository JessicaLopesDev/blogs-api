const { Router } = require('express');

const loginRouter = require('./login');
const userRouter = require('./user');
const categoriesRouter = require('./categories');
const postRouter = require('./post');

const appRoutes = Router();

appRoutes.use('/login', loginRouter);
appRoutes.use('/user', userRouter);
appRoutes.use('/categories', categoriesRouter);
appRoutes.use('/post', postRouter);

module.exports = appRoutes;

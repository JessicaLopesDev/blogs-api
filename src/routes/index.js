const { Router } = require('express');

const loginRouter = require('./login');

const appRoutes = Router();

appRoutes.use('/login', loginRouter);

module.exports = appRoutes;

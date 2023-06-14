const express = require('express');

const UserController = require('../controllers/UserController');
const UserValidation = require('../middlewares/UserValidation');

const userRouter = express.Router();

userRouter.post('/', UserValidation, UserController.createUser);

module.exports = userRouter;

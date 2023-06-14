const express = require('express');

const UserController = require('../controllers/UserController');
const UserValidation = require('../middlewares/UserValidation');
const { TokenValidation } = require('../middlewares/TokenValidation');

const userRouter = express.Router();

userRouter.post('/', UserValidation, UserController.createUser);
userRouter.get('/', TokenValidation, UserController.findAll);
userRouter.get('/:id', TokenValidation, UserController.findById);

module.exports = userRouter;

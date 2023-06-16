const express = require('express');

const PostController = require('../controllers/PostController');
const { TokenValidation } = require('../middlewares/TokenValidation');

const postRouter = express.Router();

// postRouter.post('/', TokenValidation, PostController.createpost);
postRouter.get('/', TokenValidation, PostController.findAll);

module.exports = postRouter;

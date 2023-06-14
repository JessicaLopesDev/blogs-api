const express = require('express');

const CategoriesController = require('../controllers/CategoriesController');
const { TokenValidation } = require('../middlewares/TokenValidation');

const categoriesRouter = express.Router();

categoriesRouter.post('/', TokenValidation, CategoriesController.createCategories);

module.exports = categoriesRouter;

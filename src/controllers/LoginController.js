// const services = require('../services/products');

const ProductsController = {
  searchProducts: async (_req, res) => {
    // const products = await services.SearchProductsService();

    res.status(200).json([]);
  },
};

module.exports = ProductsController;

const CategoriesService = require('../services/CategoriesService');

const CategoriesController = {
  createCategories: async (req, res) => {
    const { name } = req.body;
    const category = await CategoriesService.create({ name });

    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    return res.status(201).json(category);
  },
};

module.exports = CategoriesController;

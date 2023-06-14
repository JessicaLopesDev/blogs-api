const { Category } = require('../models');

const CategoriesService = {
  create: async ({ name }) => {
    const category = await Category.create({ name });
    return {
      id: category.id,
      name: category.name,
    };
  },
};

module.exports = CategoriesService;

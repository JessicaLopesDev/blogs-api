const PostService = require('../services/PostService');

const PostController = {
  // createPost: async (req, res) => {
  //   const { name } = req.body;
  //   const category = await PostService.create({ name });

  //   if (!name) {
  //     return res.status(400).json({ message: '"name" is required' });
  //   }
  //   return res.status(201).json(category);
  // },

  findAll: async (_req, res) => {
    const posts = await PostService.findAll();
    // console.log(posts);
    return res.status(200).json(posts);
  },
};

module.exports = PostController;

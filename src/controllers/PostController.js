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

  findById: async (req, res) => {
    const { id } = req.params;

    const post = await PostService.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
  },
};

module.exports = PostController;

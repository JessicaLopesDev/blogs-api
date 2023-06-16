const { BlogPost, User, Category } = require('../models');

const PostService = {
  // create: async ({ name }) => {
  //   const post = await Post.create({ name });
  //   return {
  //     id: post.id,
  //     name: post.name,
  //   };
  // },

  findAll: async () => {
    const posts = BlogPost.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'displayName', 'email', 'image'],
        },
        { model: Category, as: 'categories' },
      ],
    });
    console.log(posts);

    return posts;
  },
};

module.exports = PostService;

const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const UserService = {
  create: async ({ displayName, email, password, image }) => {
    const createUser = await User.create({ displayName, email, password, image });
    const token = createToken({ email: createUser.email });
  
    return token;
  },
};

module.exports = UserService;
const UserService = require('../services/UserService');

const UserController = {
  createUser: async (req, res) => {
    const token = await UserService.create(req.body);
    res.status(201).json({ token });
  },
};

module.exports = UserController;

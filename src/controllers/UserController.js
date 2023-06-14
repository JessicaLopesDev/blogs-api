const UserService = require('../services/UserService');

const UserController = {
  createUser: async (req, res) => {
    const token = await UserService.create(req.body);
    res.status(201).json({ token });
  },
  findAll: async (_req, res) => {
    const users = await UserService.findAll();
    res.status(200).json(users);
  },
};

module.exports = UserController;

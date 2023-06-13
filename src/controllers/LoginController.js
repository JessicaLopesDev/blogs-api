const LoginService = require('../services/LoginService');

const LoginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const token = await LoginService({ email, password });

    return res.status(200).json({ token });
  },
};

module.exports = LoginController;

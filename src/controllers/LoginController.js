// const services = require('../services/products');

const LoginController = {
  createLogin: async (req, res) => {
    // const { email } = req.body;

    // const newLogin = await services.CreateLoginService(name);
    console.log(req.body);
    res.status(201).json([]);
  },
};

module.exports = LoginController;

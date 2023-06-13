const User = require('../models/User');

const LoginService = async ({ email, _password }) => {
  const newLogin = await User.findOne({ where: { email } });
  return newLogin;
};

module.exports = LoginService;

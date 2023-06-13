import LoginService from '../services/LoginService';

const LoginController = {
  createLogin: async (req, res) => {
    const newLogin = await LoginService(req.body);
    res.status(200).json(newLogin);
  },
};

export default LoginController;

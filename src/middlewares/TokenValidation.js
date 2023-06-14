const { decodeToken } = require('../utils/JWT');

const validateJwt = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const decoded = decodeToken(token);

  res.locals.user = decoded;

  next();
};

module.exports = {
  validateJwt,
};

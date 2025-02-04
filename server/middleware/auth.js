const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const secretKey = process.env.JWT_SECRET;  // Get the JWT secret from the .env file 

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(403).json({ message: 'Access Denied' });

  try {
    const decoded = jwt.verify(token, secretKey); // Use your secret key
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

module.exports = { authMiddleware };

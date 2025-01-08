const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async function(req, res, next) {
  // Get token from header
  const token = req.header('Authorization');

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied. No token provided.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token.split(" ")[1],'sec');

    req.user = await User.findByPk(decoded.id);
    
    if (!req.user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid.' });
  }
};

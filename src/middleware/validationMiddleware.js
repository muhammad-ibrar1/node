// middlewares/validationMiddleware.js
const { validationResult } = require('express-validator');

const validationMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg); 
    return res.status(400).json({ messages: errorMessages }); 
  }
  next();
};

module.exports = validationMiddleware;

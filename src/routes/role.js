const express = require('express');

const roleRouter = express.Router();

const authenticate = require('../middleware/authMiddleware');
const rolecontroller = require('../controller/rolecontroller');


roleRouter.post('/', authenticate,rolecontroller.register);



module.exports = roleRouter;
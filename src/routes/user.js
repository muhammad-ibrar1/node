const express = require('express');

const userRouter = express.Router();

const userController = require('../controller/userController');
const UserValidator = require('../validators/userValidator');
const validationMiddleware = require('../middleware/validationMiddleware');
const authenticate = require('../middleware/authMiddleware');



userRouter.post('/update',UserValidator.profileValidate(),authenticate,validationMiddleware, userController.ManageProfile);
userRouter.get('/:id',userController.getUserById);
userRouter.get('/', authenticate,userController.getAllUsers);
userRouter.post('/register', UserValidator.validate(),validationMiddleware, userController.register);
userRouter.post('/login',UserValidator.loginvalidate(),validationMiddleware, userController.userlogin);



module.exports = userRouter;
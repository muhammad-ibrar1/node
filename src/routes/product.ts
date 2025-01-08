const express = require("express");
import authenticate from '../middleware/authMiddleware';
import productController from '../controller/productController';
import ProductValidator from '../validators/productValidate'; // Ensure the correct file path
import validationMiddleware from '../middleware/validationMiddleware';

const productRouter = express.Router();

productRouter.post('/', ProductValidator.registerValidate(),validationMiddleware, productController.store);

export default productRouter;

import { body } from 'express-validator';

class ProductValidator {
  
  static registerValidate() {
    return [
      body('name').notEmpty().withMessage('Name is required'),
    ];
  }
}

export default ProductValidator;

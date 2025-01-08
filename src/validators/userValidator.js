const { body } = require('express-validator');
const { User } = require('../models');
const { Role } = require('../models');

class UserValidator {

  static async findByEmail(email) {
    console.log("Checking email:", email);
    return await User.findOne({ where: { email } });
  }

  static async findRole(name)
  {
    return await Role.findOne({ where: { name } });
    
  }

  static validate() {
    return [
      body('name').notEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Email is invalid').custom(async (value, { req }) => {
        const user = await UserValidator.findByEmail(value);
        if (user) {
          throw new Error('Email already in use');
        }
        return true;
      }),
      body('role').optional().custom(
        async (value, { req }) => {
        const role = await UserValidator.findRole(value);
        if (!role) {
          throw new Error('Role is not in our system');
        }
        return true;
      }).withMessage('role should be valid')
    ];
  }

  static loginvalidate()
  {
    return [
        body('email').notEmpty().isEmail().withMessage('Email is invalid'),
    ];
  }

  static profileValidate()
  {
    return [
      
      body('working_hour').notEmpty().withMessage('Working hour can not be null'),
      body('shift_start_time').notEmpty().withMessage('Shift Start Time can not be null'),
      body('manager_id').notEmpty().withMessage('manger Id can not be null'),

    ];
  }
 
}

module.exports = UserValidator;

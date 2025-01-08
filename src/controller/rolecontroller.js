
const jwt = require('jsonwebtoken');
const { Role } = require('../models');

class RoleController {

  async register(req,res)
  {
    try {
        const roledata = req.body;
        const role = await Role.create(
            roledata
        );
        res.status(200).json(role);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  }

 

}

module.exports = new RoleController();
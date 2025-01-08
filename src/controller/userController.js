const userService = require('../service/userService');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  }

  async register(req,res)
  {
    try {
      const userData = req.body;
      const users = await userService.register(userData);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  }

  async getUserById(req,res) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json(user);
      
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  }

  async userlogin(req,res)
  {
    const {  email } = req.body;
    const user = await User.findOne({ where: { email } });
    if(user)
    {
      const token = jwt.sign({ id: user.id }, 'sec', { expiresIn: '1h' });
      res.status(200).json({ token });
    }
    else{
      res.status(200).json({ message: 'User not exist' });
    }


  }

  async ManageProfile(req,res)
  {
    const userdata = req.body;
    const user =req.user;

    const userprofile = await userService.updateProfile(userdata,user)
    if(userprofile)
    {
      res.status(200).json({ user });
    }
    else{
      res.status(200).json({ message: 'User not exist' });
    }

  }

}

module.exports = new UserController();
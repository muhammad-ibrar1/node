
const { User } = require('../models');
const { Role } = require('../models');

class UserService {


  async getAllUsers()
  {
    const users = await User.findAll();
    return users;

  }

  
  async register(userData:any) {

      let user = await User.create(
          userData
        );

       if(userData.role)
        {
          let name:string = userData.role;
          let role_id:number;

          const role = await Role.findOne({ where: { name } });
          role_id = role.id;
          user.RoleId = role_id;
          await user.save();
        } 
        else{
          const name:string = "Software - Engineer"
          const role = await Role.findOne({ where: { name } });
          user.RoleId = role.id;
          await user.save();

        }

       return user;

  }

  async getUserById(id:number)
  {
    const user = await User.findOne({ where: { id },
      include:[
        {
          model:Role,
          as:'Role'
        },
        {
          model:User,
          as:"Manager",
          include:[
            {
              model:Role,
              as:"Role",
            }
          ],
        }
      ] 
    });
    return user;
  }

  async updateProfile(userdata:any,user:any)
  {
    let newValues: { [key: string]: any } = {};
    newValues.working_hour=userdata.working_hour;
    newValues.managerId=userdata.manager_id;

    const date = new Date(`1970-01-01T${userdata.shift_start_time}:00`);
    const start_time = date.toLocaleTimeString('en-US', { hour12: false });

    date.setHours(date.getHours() + userdata.working_hour);
    const end_time = date.toLocaleTimeString('en-US', { hour12: false });

    newValues.shift_start_time=start_time;
    newValues.shift_end_time=end_time;

    const result = await User.update(newValues, {
      where: {
        id: user.id
      }
    });

    return result;
   
  }

  
   
  }
  
  module.exports = new UserService();
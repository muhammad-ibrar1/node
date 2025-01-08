const express = require('express');
const app = express();
const { sequelize } = require('./models');

// Import routers
const userRouter = require('./routes/user');
const roleRouter = require('./routes/role');

const RoleModel = require('./models/Role');
const { default: productRouter } = require('./routes/product');

// Middleware for JSON parsing
app.use(express.json());

// Use routers
app.use('/user', userRouter);
app.use('/role', roleRouter);
app.use('/product', productRouter);


// Sync database and start server
const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await sequelize.authenticate();
    
    // Force sync all models with database
    await sequelize.sync({ alter: true });

    // const roles = [
    //   { name: 'Manager' },
    //   { name: 'Software Engineer' },
    //   { name: 'Senior Software Engineer' }
    // ];
    // await sequelize.Role.bulkCreate(roles);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
async function seedData()
{
  await sequelize.sync({ force: true });
  await RoleModel.bulkCreate([{ name: 'Manager' },{ name: 'Software - Engineer' },{ name: 'Senior Software - Engineer' }]);
    
}

startServer();
// seedData();

module.exports = app;

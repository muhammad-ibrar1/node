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


app.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

   
    await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded' });

   
    await page.waitForSelector('textarea[name="q"]');

  
    await page.type('textarea[name="q"]', query, { delay: 100 });
    await page.keyboard.press('Enter');

    
    await page.waitForSelector('.g');

    
    const titles = await page.$$eval('.g h3', (elements) => {
      return elements.slice(0, 10).map((el) => el.innerText);
    });

   
    await browser.close();

   
    res.json({ titles });
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


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

const sequelize = require('../config/connection');
const { User, TimeCapsule, Goals } = require('../models');

const userData = require('./userData.json');
const timeCapsuleData = require('./timeCapsuleData.json');
const goalsData = require('./goalsSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const goal of goalsData) {
    await Goals.create({
      ...goal,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }



  for (const timecapsule of timeCapsuleData) {
    await TimeCapsule.create({
      ...timecapsule,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }


  process.exit(0);
};

seedDatabase();

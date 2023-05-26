const sequelize = require('../config/connection');
const { User, TimeCapsule, Goals } = require('../models');

const userData = require('./userData.json');
const timeCapsuleData = require('./timeCapsuleData.json');
const goalsData = require('./goalsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const Goals of goalsData) {
    await Goals.create({
      ...Goals,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }



  for (const TimeCapsule of timeCapsuleData) {
    await TimeCapsule.create({
      ...TimeCapsule,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }


  process.exit(0);
};

seedDatabase();

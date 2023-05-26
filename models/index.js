const User = require('./User');
const Goals = require('./goals');
const TimeCapsule = require('./timeCapsule');

User.hasMany(Goals, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Goals.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(TimeCapsule, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

TimeCapsule.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Goals, TimeCapsule };

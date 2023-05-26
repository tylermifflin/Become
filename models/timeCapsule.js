const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TimeCapsule extends Model {}

TimeCapsule.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,  
            primaryKey: true,
            autoIncrement: true,
        },
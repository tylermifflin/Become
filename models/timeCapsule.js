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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            validate: {
                isAfter: NOW,
            },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        },
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'timeCapsule',
          }
        );
        
        module.exports = TimeCapsule;



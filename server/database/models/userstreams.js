'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserStreams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserStreams.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    videoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(['ACTIVE', 'INACTIVE']),
      defaultValue: 'ACTIVE',
    },
    duration: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'UserStreams',
  });
  return UserStreams;
};
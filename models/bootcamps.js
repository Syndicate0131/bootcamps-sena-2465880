'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamps.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    phone: DataTypes.STRING,
    average_cost: DataTypes.FLOAT,
    average_rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bootcamps',
  });
  return Bootcamps;
};
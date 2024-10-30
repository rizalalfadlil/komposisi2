'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Umur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Umur.init({
    umur: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Umur',
  });
  return Umur;
};
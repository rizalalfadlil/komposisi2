'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Komposisi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Komposisi.init({
    produk: DataTypes.STRING,
    admin: DataTypes.ARRAY(DataTypes.INTEGER),
    ff: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Komposisi',
  });
  return Komposisi;
};
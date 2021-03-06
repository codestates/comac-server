'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.post, {
        foreignKey: 'user_id'
      })
      this.hasMany(models.comment, {
        foreignKey: 'user_id'
      })
      this.hasMany(models.post_like, {
        foreignKey: 'user_id'
      })
      this.hasMany(models.comment_like, {
        foreignKey: 'user_id'
      })
    }
  };
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    generation: DataTypes.STRING,
    provider: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
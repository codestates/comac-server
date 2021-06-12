'use strict';
const {
  Model
} = require('sequelize');
const post = require('./post');

module.exports = (sequelize, DataTypes) => {
  class channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.post, {
        foreignKey: 'channel_id'
      })
    }
  };
  channel.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'channel',
  });
  return channel;
};
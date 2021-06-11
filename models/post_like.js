'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
      this.belongsTo(models.post, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE'
      })
    }
  };
  post_like.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post_like',
  });
  return post_like;
};
'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.comment, {
        foreignKey: 'post_id'
      })
      this.hasMany(models.post_like, {
        foreignKey: 'post_id'
      })

      this.belongsTo(models.user, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
      this.belongsTo(models.channel, {
        foreignKey: 'channel_id',
        onDelete: 'CASCADE'
      })
      this.belongsToMany(models.tag, {
        through: 'post_tag_map',
        foreignKey: {
          name: 'post_id'
        },
        onDelete: 'CASCADE'
      })
    }
  };
  post.init({
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    channel_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};
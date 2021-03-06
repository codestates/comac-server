'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.post, {
        through: 'post_tag_map',
        foreignKey: {
          name: 'tag_id'
        },
        onDelete: 'CASCADE'
      })
    }
  };
  tag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tag',
  });
  return tag;
};
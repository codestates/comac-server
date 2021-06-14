'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        defaultValue: 'FILL_ME_IN',
        type: Sequelize.STRING
      },
      generation: {
        defaultValue: 'FILL_ME_IN',
        type: Sequelize.STRING
      },
      provider: {
        defaultValue: 'local',
        type: Sequelize.STRING
      },
      img: {
        defaultValue: 'https://pbs.twimg.com/media/ER6KHATU0AALVqi?format=jpg&name=small',
        type: Sequelize.STRING
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
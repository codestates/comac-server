'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      username: 'kimcoding',
      password: '1234',
      name: 'kimcoding',
      generation: '28th',
      img: 'https://pbs.twimg.com/media/ER6KHATU0AALVqi?format=jpg&name=small',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'leeact',
      password: '1234',
      name: 'leeact',
      generation: '27th',
      img: 'https://pbs.twimg.com/media/ER6KHATU0AALVqi?format=jpg&name=small',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
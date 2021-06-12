'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('post',[{
      content: '아 코딩 너무 재밌다 ^^',
      user_id: 1,
      channel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('post', null, {});
  }
};

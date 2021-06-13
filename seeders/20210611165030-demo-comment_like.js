'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comment_likes', [{
      user_id: 1,
      comment_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      comment_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comment_likes', null, {})
  }
};

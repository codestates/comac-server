'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [{
      content: '정말?? (절래 절래)',
      post_id: 1,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      content: '정말입니다! ^^',
      post_id: 1,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {})
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tag', [{
      name: '코딩'
    },
    {
      name: '꿀잼'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tag', null, {})
  }
};

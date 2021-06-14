'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tags', [{
      name: '코딩'
    },
    {
      name: '꿀잼'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tags', null, {})
  }
};

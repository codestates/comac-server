'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('post_tag_map', [{
      post_id: 1,
      tag_id: 1
    },
    {
      post_id: 1,
      tag_id: 2
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('post_tag_map', null, {})
  }
};

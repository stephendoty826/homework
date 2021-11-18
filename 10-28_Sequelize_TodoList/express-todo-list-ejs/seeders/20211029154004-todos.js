'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('todos', [
    {
      todoItem: "Get coffee",
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      todoItem: "Grocery shopping",
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      todoItem: "Work on résumé",
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

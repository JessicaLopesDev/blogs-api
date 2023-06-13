'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('users', {
       id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER,
       },
       display_name: {
         type: Sequelize.STRING,
       },
       email: {
         type: Sequelize.STRING,
       },
       password: {
         type: Sequelize.STRING,
       },
       image: {
         type: Sequelize.STRING,
       },
       createdAt: {
         allowNull: false,
         type: Sequelize.DATE,
       },
       updatedAt: {
         allowNull: false,
         type: Sequelize.DATE,
       },
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

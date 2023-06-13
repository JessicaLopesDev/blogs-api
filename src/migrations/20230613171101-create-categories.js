'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
    }, {
        timestamps: false,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('categories');
  }
};

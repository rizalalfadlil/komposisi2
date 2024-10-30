'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Komposisis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      produk: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      ff: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Komposisis');
  }
};
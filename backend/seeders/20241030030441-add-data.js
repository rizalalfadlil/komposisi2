"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Komposisis",
      [
        {
          produk: "platinum",
          admin: [1, 1, 9],
          ff: [2, 3, 5],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produk: "gold",
          admin: [3, 6, 9],
          ff: [4, 7, 10],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produk: "plus",
          admin: [2, 6, 11],
          ff: [4, 9, 15],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert("Umurs", [
      {
        umur: [17, 40, 70, 36, 48, 72],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

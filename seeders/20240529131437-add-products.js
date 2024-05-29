'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        title: "Microwave",
        sku: "SKU001",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Kulkas",
        sku: "SKU002",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },  
      {
        title: "Oven",
        sku: "SKU003",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Blender",
        sku: "SKU004",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Dispenser",
        sku: "SKU005",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

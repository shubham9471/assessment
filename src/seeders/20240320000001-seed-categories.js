'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        CategoryName: 'Electronics',
        Description: 'Electronic devices and accessories',
        IsActive: true,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        CategoryName: 'Clothing',
        Description: 'Apparel and fashion items',
        IsActive: true,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        CategoryName: 'Home & Kitchen',
        Description: 'Home appliances and kitchenware',
        IsActive: true,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
}; 
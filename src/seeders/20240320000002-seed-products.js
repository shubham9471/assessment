'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        ProductName: 'I phone 16 plus',
        Description: 'The new i-phone 16 plus with long batter ',
        Price: 999.99,
        StockQuantity: 50,
        CategoryId: 1, 
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        ProductName: 'Sony headphone',
        Description: 'Noise cancelling wireless headphones',
        Price: 199.99,
        StockQuantity: 100,
        CategoryId: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        ProductName: 'Men T-Shirt',
        Description: 'comfortable cotton t-shirt',
        Price: 29.99,
        StockQuantity: 200,
        CategoryId: 2, 
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        ProductName: 'Coffee Maker',
        Description: 'Automatic coffee maker with timer',
        Price: 149.99,
        StockQuantity: 30,
        CategoryId: 3,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
}; 
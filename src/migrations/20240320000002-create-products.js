// 20240320000001-seed-products.js
import { Sequelize } from 'sequelize';

export const up = async (queryInterface) => {
  await queryInterface.createTable('Products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    ProductName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    Price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    StockQuantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    CategoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    CreatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    UpdatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Products');
};

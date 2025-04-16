// Example of migration using ES module syntax

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    CategoryName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    IsActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
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

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('Categories');
};

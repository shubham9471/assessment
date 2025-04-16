const {Category} = require('../models/Category.js');
const { sequelize } = require('../config/database.js');


const createCategory = async (categoryData) => {
  const transaction = await sequelize.transaction();
  try {
    const category = await Category.create(categoryData, { transaction });
    await transaction.commit();
    return category;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

const getAllCategories = async () => {
  return await Category.findAll({
    order: [['createdAt', 'DESC']]
  });
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) {
    throw new Error('Category not found');
  }
  return category;
};

const updateCategory = async (id, categoryData) => {
  const transaction = await sequelize.transaction();
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new Error('Category not found');
    }
    await category.update(categoryData, { transaction });
    await transaction.commit();
    return category;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

const deleteCategory = async (id) => {
  const transaction = await sequelize.transaction();
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new Error('Category not found');
    }
    await category.destroy({ transaction });
    await transaction.commit();
    return { message: 'Category deleted successfully' };
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

module.exports =  {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}; 
const CategoryRepository = require('../repositories/CategoryRepository.js');

class CategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async createCategory(categoryData) {
    try {
      return await this.categoryRepository.create(categoryData);
    } catch (error) {
      throw new Error(`Error creating category: ${error.message}`);
    }
  }

  async getAllCategories() {
    try {
      return await this.categoryRepository.findAllOrdered();
    } catch (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }
  }

  async getCategoryById(id) {
    try {
      const category = await this.categoryRepository.findById(id);
      if (!category) {
        throw new Error('Category not found');
      }
      return category;
    } catch (error) {
      throw new Error(`Error fetching category: ${error.message}`);
    }
  }

  async updateCategory(id, categoryData) {
    try {
      return await this.categoryRepository.update(id, categoryData);
    } catch (error) {
      throw new Error(`Error updating category: ${error.message}`);
    }
  }

  async deleteCategory(id) {
    try {
      return await this.categoryRepository.delete(id);
    } catch (error) {
      throw new Error(`Error deleting category: ${error.message}`);
    }
  }
}

module.exports = new CategoryService(); 
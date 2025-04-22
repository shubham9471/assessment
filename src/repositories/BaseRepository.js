const { sequelize } = require('../config/database.js');

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findAll(options = {}) {
    return await this.model.findAll(options);
  }

  async findById(id, options = {}) {
    return await this.model.findByPk(id, options);
  }

  async create(data) {
    const transaction = await sequelize.transaction();
    try {
      const result = await this.model.create(data, { transaction });
      await transaction.commit();
      return result;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async update(id, data) {
    const transaction = await sequelize.transaction();
    try {
      const instance = await this.model.findByPk(id);
      if (!instance) {
        throw new Error(`${this.model.name} not found`);
      }
      await instance.update(data, { transaction });
      await transaction.commit();
      return instance;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async delete(id) {
    const transaction = await sequelize.transaction();
    try {
      const instance = await this.model.findByPk(id);
      if (!instance) {
        throw new Error(`${this.model.name} not found`);
      }
      await instance.destroy({ transaction });
      await transaction.commit();
      return { message: `${this.model.name} deleted successfully` };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = BaseRepository; 
const BaseRepository = require('./BaseRepository.js');
const { Category } = require('../models/Category.js');

class CategoryRepository extends BaseRepository {
  constructor() {
    super(Category);
  }

  async findAllOrdered() {
    return await this.findAll({
      order: [['CreatedAt', 'DESC']]
    });
  }
}

module.exports = CategoryRepository; 
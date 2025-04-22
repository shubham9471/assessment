const BaseRepository = require('./BaseRepository.js');
const { Product } = require('../models/Product.js');
const { Category } = require('../models/Category.js');

class ProductRepository extends BaseRepository {
  constructor() {
    super(Product);
  }

  async findAllWithCategory() {
    return await this.findAll({
      attributes: ['id', 'ProductName', 'Description', 'Price', 'StockQuantity', 'CategoryId'],
      include: [{
        model: Category,
        attributes: ['CategoryName', 'Description', 'IsActive']
      }],
      raw: true
    });
  }

  async findByIdWithCategory(id) {
    return await this.findById(id, {
      include: [{
        model: Category,
        attributes: ['CategoryName', 'Description', 'IsActive']
      }]
    });
  }
}

module.exports = ProductRepository; 
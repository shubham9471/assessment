const { Product } = require('../models/Product.js');
const { Category } = require('../models/Category.js');
const { sequelize } = require('../config/database.js');

const getAllProducts = async () => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'ProductName', 'Description', 'Price', 'StockQuantity', 'CategoryId'],
      include: [{
        model: Category,
        attributes: ['CategoryName', 'Description', 'IsActive']
      }],
      raw: true,
      // nest: true
    });
    return products;
  } catch (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findByPk(id, {
      include: [{
        model: Category,
        attributes: ['CategoryName', 'Description', 'IsActive']
      }]
    });
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw new Error(`Error fetching product: ${error.message}`);
  }
};

const createProduct = async (productData) => {
  const transaction = await sequelize.transaction();
  try {
    const product = await Product.create(productData, { transaction });
    await transaction.commit();
    return product;
  } catch (error) {
    await transaction.rollback();
    throw new Error(`Error creating product: ${error.message}`);
  }
};

const updateProduct = async (id, productData) => {
  const transaction = await sequelize.transaction();
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    await product.update(productData, { transaction });
    await transaction.commit();
    return product;
  } catch (error) {
    await transaction.rollback();
    throw new Error(`Error updating product: ${error.message}`);
  }
};

const deleteProduct = async (id) => {
  const transaction = await sequelize.transaction();
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    await product.destroy({ transaction });
    await transaction.commit();
    return { message: 'Product deleted successfully' };
  } catch (error) {
    await transaction.rollback();
    throw new Error(`Error deleting product: ${error.message}`);
  }
};

module.exports =  {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}; 
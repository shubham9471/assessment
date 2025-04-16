const express = require('express');
const { validateBody } = require('../middleware/validators/validators.js');
const productSchema = require('../schema/productSchema.js');
const productService = require('../services/productService.js');

const router = express.Router();

// Get all products
router.get('/products', async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// Get product by ID
router.get(
  '/products/:id',
  async (req, res, next) => {
    try {
      const product = await productService.getProductById(req.params.id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// Create new product
router.post(
  '/products',
  validateBody(productSchema.product.body),
  async (req, res, next) => {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }
);

// Update product
router.put(
  '/products/:id',
  validateBody(productSchema.product.body),
  async (req, res, next) => {
    try {
      const product = await productService.updateProduct(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// Delete product
router.delete(
  '/products/:id',
  async (req, res, next) => {
    try {
      const result = await productService.deleteProduct(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = {router};
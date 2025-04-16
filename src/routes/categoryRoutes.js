const express = require('express');
const { validateBody, validateParams } = require('../middleware/validators/validators.js');
const categorySchema = require('../schema/categorySchema.js');
const categoryService = require('../services/categoryService.js');

const router = express.Router();

// Create new category
router.post(
  '/category',
  validateBody(categorySchema.category.body),
  async (req, res, next) => {
    try {
      const category = await categoryService.createCategory(req.body);
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }
);

// Get all categories
router.get('/getAllCategories', async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

// Get category by ID
router.get(
  '/getCategory/:id',
  validateParams(categorySchema.categoryParams.params),
  async (req, res, next) => {
    try {
      const category = await categoryService.getCategoryById(req.params.id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

// Update category
router.put(
  '/updateCategory/:id',
  validateBody(categorySchema.category.body),
  async (req, res, next) => {
    try {
      const category = await categoryService.updateCategory(req.params.id, req.body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

// Delete category
router.delete(
  '/deleteCategoryById/:id',
  validateParams(categorySchema.categoryParams.params),
  async (req, res, next) => {
    try {
      const result = await categoryService.deleteCategory(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = {router}; 
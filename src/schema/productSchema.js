const joi = require('joi')

const product = {
  body: joi.object().keys({
    ProductName: joi.string().required(),
    Description: joi.string().optional(),
    Price: joi.number().min(0).required(),
    CategoryId: joi.number().integer().required(),
    StockQuantity: joi.number().integer().min(0).default(0),
  })
};

module.exports = {
  product,
}; 
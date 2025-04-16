const joi = require('joi')

const category = {
  body: joi.object().keys({
    name: joi.string().required(),
    description: joi.string().optional(),
    parentId: joi.string().guid({ version: ['uuidv4'] }).optional(),
    status: joi.string().valid('active', 'inactive').default('active'),
  }),
};

const categoryParams = {
  params: joi.object().keys({
    id: joi.string().guid({ version: ['uuidv4'] }).required()
  })
};

module.exports = {
  category,
  categoryParams
}; 
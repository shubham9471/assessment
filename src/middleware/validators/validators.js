const joi = require('joi');

const getJoiErrorMessages = (joiError) => joiError.details.map((detail) => detail.message).join('. ');

const validateBody = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: getJoiErrorMessages(error) });
  }

  req.body = value;
  return next();
};

const validateQuery = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.query);
  if (error) {
    return res.status(400).json({ error: getJoiErrorMessages(error) });
  }

  req.query = value;
  return next();
};

const validateHeaders = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.headers);
  if (error) {
    return res.status(400).json({ error: getJoiErrorMessages(error) });
  }

  req.headers = value;
  return next();
};

const validateParams = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.params);
  if (error) {
    return res.status(400).json({ error: getJoiErrorMessages(error) });
  }

  req.params = value;
  return next();
};

const validate = (schema) => async (req, res, next) => {
  try {
    if (schema.params) {
      req.params = await schema.params.validateAsync(req.params ?? {});
    }

    if (schema.body) {
      req.body = await schema.body.validateAsync(req.body ?? {});
    }

    if (schema.query) {
      req.query = await schema.query.validateAsync(req.query ?? {});
    }

    if (schema.headers) {
      req.headers = await schema.headers.validateAsync(req.headers ?? {});
    }

    if (schema.files) {
      req.files = await schema.files.validateAsync(req.files ?? {});
    }

    next();
  } catch (err) {
    if (err instanceof joi.ValidationError) {
      return res.status(400).json({ error: getJoiErrorMessages(err) });
    }
    next(err);
  }
};

module.exports = {
  validateBody,
  validateQuery,
  validateHeaders,
  validateParams,
  validate,
};

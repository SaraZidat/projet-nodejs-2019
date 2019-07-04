const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email: joi.string().email({ minDomainSegments: 2 }),
});

const updateModel = joi.object().keys({
  firstname: joi.string(),
  lastname: joi.string(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email: joi.string().email({ minDomainSegments: 2 }),
});


module.exports = {
  createModel,
  updateModel,
};

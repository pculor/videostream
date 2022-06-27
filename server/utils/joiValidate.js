const JoisBase = require('joi');
const JoiDate = require('@joi/date');
const { customError, BAD_REQUEST } = require('request-response-handler');

const Joi = JoisBase.extend(JoiDate);

/**
 * Validate request body
 *
 * @param {object} payload
 * @param {object} res
 * @param {object} next
 * @param {object} schema
 */
const joiValidate = (payload, schema, req, res, next) => {
  const { error, value } = schema.validate(payload, {
    allowUnknown: true,
  });

  // TODO check for validation error
  if (error) {
    const errors = error.details.map((current) => current.message.replace(/['"]/g, ''));
    return next(
      customError({ status: BAD_REQUEST, message: errors[0] }),
    );
  }

  return value;
};

module.exports = {
  joiValidate,
  Joi,
};

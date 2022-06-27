const { Joi, joiValidate } = require('../utils/joiValidate');

/**
 * Validations
 *
 * @class Validations
 */
class Validations {
  /**
   * validate stream
   *
   * @static
   * @param {*} req
   * @return {*}
   * @memberof Validations
   */
   static async Stream(req, res, next) {
    const payload = {
      ...req.body, ...req.query, ...req.params, ...req.headers,
    };
    const schema = Joi.object().keys({
      userId: Joi.number(),
      videoId: Joi.number(),
      status: Joi.string().valid('ACTIVE', 'INACTIVE').optional().allow('', null).messages({
        'string.pattern.base': "status must be a string",
        'any.only': `status value must be one of the following ACTIVE, INACTIVE`,
      }),
    });
    req.payload = await joiValidate(payload, schema, req, res, next);
    return next();
  }
}

module.exports = Validations;

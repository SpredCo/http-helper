const utils = require('../utils');

function snakeCaseMiddleware (req, res, next) {
  if (res.body) {
    res.body = utils.toSnakeCase(res.body);
  }
  res.json(res.body);
}

module.exports = snakeCaseMiddleware;
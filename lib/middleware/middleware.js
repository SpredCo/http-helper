const snakeCaseMiddleware = require('./snake-case');

function defaultMiddleware() {
  return [snakeCaseMiddleware];
}

module.exports.defaultMiddleware = defaultMiddleware;

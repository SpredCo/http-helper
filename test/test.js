const requireDir = require('require-dir');

describe('Testing sharemyscreen-httpcommon library', function () {
  describe('Testing utils', function () {
    require('./utils');
  });

  describe('Testing middlewares', function () {
    requireDir('./middleware');
  });
});

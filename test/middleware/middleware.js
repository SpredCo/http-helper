const expect = require('chai').expect;
const httpCommon = require('../../');
const snakeCaseMiddleware = require('../../lib/middleware/snake-case');

describe('Testing defaultMiddleware() set', function () {
  it('Should contain the default set of Middleware', function () {
    const defaultMiddleware = httpCommon.middleware.defaultMiddleware();
    expect(defaultMiddleware).to.eql([snakeCaseMiddleware]);
  });
});
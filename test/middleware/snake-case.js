const expect = require('chai').expect;
const snakeCaseMiddleware = require('../../lib/middleware/snake-case');
const fixture = require('../fixture/utils.json');

describe('Testing snakeCaseMiddleware()', function () {
  it ('Should transform reply to snakeCase', function (done) {
    var response = {};
    response.body = fixture.toSnakeCase.obj4.value;
    response.json = function (obj) {
      expect(obj).to.eql(fixture.toSnakeCase.obj4.expected);
      done();
    };
    snakeCaseMiddleware(null, response, null);
  });

  it ('Should do nothing if reply is null', function (done) {
    var response = {};
    response.body = null;
    response.json = function (obj) {
      expect(obj).to.be.null;
      done();
    };
    snakeCaseMiddleware(null, response, null);
  });

});
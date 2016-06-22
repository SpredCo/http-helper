const httpCommon = require('../');
const expect = require('chai').expect;
const fixture = require('./fixture/utils.json');

describe('toSnakeCase()', function () {
  it('Should convert simple object to snakeCase', function () {
    const result = httpCommon.utils.toSnakeCase(fixture.toSnakeCase.obj1.value);
    expect(result).to.eql(fixture.toSnakeCase.obj1.expected);
  });

  it('Should convert object containing array of object to snakeCase', function () {
    const result = httpCommon.utils.toSnakeCase(fixture.toSnakeCase.obj2.value);
    expect(result).to.eql(fixture.toSnakeCase.obj2.expected);
  });

  it('Should convert object containing array of string to snakeCase', function () {
    const result = httpCommon.utils.toSnakeCase(fixture.toSnakeCase.obj3.value);
    expect(result).to.eql(fixture.toSnakeCase.obj3.expected);
  });

  it('Should convert array containing object to snakeCase', function () {
    const result = httpCommon.utils.toSnakeCase(fixture.toSnakeCase.obj4.value);
    expect(result).to.eql(fixture.toSnakeCase.obj4.expected);
  });

  it('Should convert an object containing a multiple level array to snakeCase', function () {
    const result = httpCommon.utils.toSnakeCase(fixture.toSnakeCase.obj6.value);
    expect(result).to.eql(fixture.toSnakeCase.obj6.expected);
  });

  it('Should convert an object containing sub objects to snakeCase', function () {
    const result = httpCommon.utils.toSnakeCase(fixture.toSnakeCase.obj7.value);
    expect(result).to.eql(fixture.toSnakeCase.obj7.expected);
  });

  it('Should let an array of string intact', function () {
    const result = httpCommon.utils.toSnakeCase(fixture.toSnakeCase.obj5.value);
    expect(result).to.eql(fixture.toSnakeCase.obj5.expected);
  });
});

describe('sendReply()', function () {
  it('Should send reply with snakeCase body', function (done) {
    var res = {};
    res.status = function (status) {
      res.st = status;
      return res;
    };
    res.json = function (obj) {
      expect(obj).to.eql(fixture.toSnakeCase.obj4.expected);
      expect(res.st).to.equal(200);
      done();
    };
    httpCommon.utils.sendReply(res, 200, fixture.toSnakeCase.obj4.value);
  });

  it('Should send reply with empty body when no passing body parameter', function (done) {
    var res = {};
    res.status = function (status) {
      res.st = status;
      return res;
    };
    res.json = function (obj) {
      expect(obj).to.equal('');
      expect(res.st).to.equal(200);
      done();
    };
    httpCommon.utils.sendReply(res, 200);
  });

  it('Should send reply with error information', function (done) {
    var res = {};
    res.status = function (status) {
      res.st = status;
      return res;
    };
    res.json = function (obj) {
      expect(obj).to.not.be.undefined;
      expect(obj.code).to.equal(1);
      expect(obj.sub_code).to.be.undefined;
      expect(obj.message).to.equal('Invalid request');
      expect(res.st).to.equal(400);
      done();
    };
    httpCommon.utils.sendReply(res, httpCommon.error.invalidRequestError());
  });
});

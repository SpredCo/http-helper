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

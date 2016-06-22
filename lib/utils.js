const _ = require('lodash');
const changeCase = require('change-case');

function toSnakeCase (obj) {
  if (obj instanceof Array) {
    const newArray = [];
    obj.forEach(function (elem) {
      newArray.push(toSnakeCase(elem));
    });
    obj = newArray;
  } else {
    _.forIn(obj, function (value, key) {
      if (value instanceof Array) {
        const newArray = [];
        value.forEach(function (entry) {
          newArray.push(toSnakeCase(entry));
        });
      } else if (value instanceof Object) {
        value = toSnakeCase(value);
      }
      delete obj[key];
      obj[changeCase.snakeCase(key)] = value;
    });
  }

  return obj;
}

module.exports.toSnakeCase = toSnakeCase;

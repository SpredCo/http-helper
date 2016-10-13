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
        value = newArray;
      } else if (value instanceof Object) {
        value = toSnakeCase(value);
      }
      delete obj[key];
      if (value !== undefined) {
        obj[changeCase.snakeCase(key)] = value;
      }
    });
  }

  return obj;
}

function sendReply (res, statusCode, body) {
  if (statusCode instanceof Object) {
    body = {
      code: statusCode.code,
      subCode: statusCode.subCode,
      message: statusCode.message
    };
    statusCode = statusCode.httpCode;
  }
  if (body && body.toObject !== undefined) {
    body = body.toObject({print: true});
  } else if (body && body instanceof Array) {
    var tmp = [];
    body.forEach(function (elem) {
      tmp.push(elem.toObject !== undefined ? elem.toObject({ print: true }) : elem);
    });
    body = tmp;
  }
  body = body ? toSnakeCase(body) : '';
  res.status(statusCode).json(body);
}

module.exports.toSnakeCase = toSnakeCase;
module.exports.sendReply = sendReply;

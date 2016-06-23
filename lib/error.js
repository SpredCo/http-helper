
function createError (httpCode, code, subCode, message) {
  if (typeof code === 'string') {
    message = code;
    code = undefined;
    subCode = undefined;
  } else if (typeof subCode === 'string') {
    message = subCode;
    subCode = undefined;
  }

  return {
    httpCode: httpCode,
    code: code,
    subCode: subCode,
    message: message
  };
}

function testError () {
  return createError(200, 1, 1, 'test');
}

function invalidRequestError () {
  return createError(400, 1, 'Invalid request');
}

function clientExist () {
  return createError(403, 1, 1, 'Client exists');
}

function internalServerError (err) {
  return createError(500,
    'Internal server error ...\n' +
    'Please transmit this stack trace to Maxime Guedj: \n' +
    err);
}

module.exports.testError = testError;
module.exports.invalidRequestError = invalidRequestError;
module.exports.clientExist = clientExist;
module.exports.internalServerError = internalServerError;

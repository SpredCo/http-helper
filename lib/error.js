
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

function invalidGoogleToken () {
  return createError(400, 2, 1, 'Invalid google token');
}

function invalidFacebookToken () {
  return createError(400, 3, 1, 'Invalid facebook token');
}


function clientExist () {
  return createError(403, 1, 1, 'Client exists');
}

function userExist () {
  return createError(403, 2, 1, 'User exists (email address already in use)');
}

function internalServerError (err) {
  return createError(500,
    'Internal server error ...\n' +
    'Please transmit this stack trace to Maxime Guedj: \n' +
    err);
}

module.exports.testError = testError;
module.exports.invalidRequestError = invalidRequestError;
module.exports.invalidGoogleToken = invalidGoogleToken;
module.exports.invalidFacebookToken = invalidFacebookToken;
module.exports.clientExist = clientExist;
module.exports.userExist = userExist;
module.exports.internalServerError = internalServerError;

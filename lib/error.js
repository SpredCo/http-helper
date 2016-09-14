
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

function invalidRequestError () {
  return createError(400, 1, 'Invalid request');
}

function invalidGoogleToken () {
  return createError(400, 2, 1, 'Invalid google token');
}

function invalidFacebookToken () {
  return createError(400, 2, 2, 'Invalid facebook token');
}

function invalidUserUpdate () {
  return createError(400, 2, 3, 'Impossible to update email address with an external api login');
}

function alreadyFollowing () {
  return createError(400, 2, 4, 'Already following this user');
}

function notFollowing () {
  return createError(400, 2, 5, 'Not following this user');
}

function clientExist () {
  return createError(403, 1, 1, 'Client exists');
}

function userExist () {
  return createError(403, 2, 1, 'User exists (email address already in use)');
}

function pseudoExist () {
  return createError(403, 2, 2, 'User exists (pseudo already in use)');
}

function userNotFound () {
  return createError(404, 2, 1, 'Unable to find user');
}

function internalServerError (err) {
  return createError(500,
    'Internal server error ...\n' +
    'Please transmit this stack trace to Maxime Guedj: \n' +
    err);
}

module.exports.invalidRequestError = invalidRequestError;
module.exports.invalidGoogleToken = invalidGoogleToken;
module.exports.invalidFacebookToken = invalidFacebookToken;
module.exports.invalidUserUpdate = invalidUserUpdate;
module.exports.alreadyFollowing = alreadyFollowing;
module.exports.notFollowing = notFollowing;
module.exports.clientExist = clientExist;
module.exports.userExist = userExist;
module.exports.pseudoExist = pseudoExist;
module.exports.userNotFound = userNotFound;
module.exports.internalServerError = internalServerError;

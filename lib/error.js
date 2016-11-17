
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

function invalidFileType () {
  return createError(400, 1, 1, 'Invalid file type');
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

function cannotReply () {
  return createError(400, 3, 1, 'Cannot reply to this conversation');
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

function castAuthorizationRefused () {
  return createError(403, 5, 1, 'Authorization refused');
}

function userNotFound () {
  return createError(404, 2, 1, 'Unable to find user');
}

function conversationNotFound () {
  return createError(404, 3, 1, 'Unable to find conversation');
}

function messageNotFound () {
  return createError(404, 4, 1, 'Unable to find message');
}

function castNotFound () {
  return createError(404, 5, 1, 'Unable to find cast');
}

function internalServerError (err) {
  return createError(500,
    'Internal server error ...\n' +
    'Please transmit this stack trace to Maxime Guedj: \n' +
    err);
}

module.exports.invalidRequestError = invalidRequestError;
module.exports.invalidFileType = invalidFileType;
module.exports.invalidGoogleToken = invalidGoogleToken;
module.exports.invalidFacebookToken = invalidFacebookToken;
module.exports.invalidUserUpdate = invalidUserUpdate;
module.exports.cannotReply = cannotReply;
module.exports.alreadyFollowing = alreadyFollowing;
module.exports.notFollowing = notFollowing;
module.exports.clientExist = clientExist;
module.exports.userExist = userExist;
module.exports.pseudoExist = pseudoExist;
module.exports.castAuthorizationRefused = castAuthorizationRefused;
module.exports.userNotFound = userNotFound;
module.exports.conversationNotFound = conversationNotFound;
module.exports.messageNotFound = messageNotFound;
module.exports.castNotFound = castNotFound;
module.exports.internalServerError = internalServerError;

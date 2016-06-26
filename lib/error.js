
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

function invalidUpdate () {
  return createError(400, 4, 1, 'You cannot update email with a external api registration');
}

function userAlreadyMember () {
  return createError(400, 3, 1, 'User already member of the organization');
}

function userNotMember () {
  return createError(400, 3, 2, 'User not member of the organization');
}

function unauthorizedOrganizationAction () {
  return createError(401, 3, 1, 'Only organization owner can perform this action');
}

function unauthorizedOrganizationDisplay () {
  return createError(401, 3, 2, 'Only organization members can perform this action');
}

function clientExist () {
  return createError(403, 1, 1, 'Client exists');
}

function userExist () {
  return createError(403, 2, 1, 'User exists (email address already in use)');
}

function userNotFound () {
  return createError(404, 2, 1, 'Unable to find user');
}

function organizationNotFound () {
  return createError(404, 3, 1, 'Unable to find organization');
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
module.exports.invalidUpdate = invalidUpdate;
module.exports.userAlreadyMember = userAlreadyMember;
module.exports.userNotMember = userNotMember;
module.exports.unauthorizedOrganizationAction = unauthorizedOrganizationAction;
module.exports.unauthorizedOrganizationDisplay = unauthorizedOrganizationDisplay;
module.exports.clientExist = clientExist;
module.exports.userExist = userExist;
module.exports.userNotFound = userNotFound;
module.exports.organizationNotFound = organizationNotFound;
module.exports.internalServerError = internalServerError;

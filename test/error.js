const expect = require('chai').expect;
const httpError = require('../').error;

it('invalidRequestError()', function () {
  const result = httpError.invalidRequestError();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(1);
  expect(result.message).to.equal('Invalid request');
});

it('invalidFileType()', function () {
  const result = httpError.invalidFileType();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(1);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Invalid file type');
});

it('invalidGoogleToken()', function () {
  const result = httpError.invalidGoogleToken();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Invalid google token');
});

it('invalidFacebookToken()', function () {
  const result = httpError.invalidFacebookToken();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(2);
  expect(result.message).to.equal('Invalid facebook token');
});

it('invalidUserUpdate()', function () {
  const result = httpError.invalidUserUpdate();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(3);
  expect(result.message).to.equal('Impossible to update email address with an external api login');
});

it('cannotReply()', function () {
  const result = httpError.cannotReply();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(3);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Cannot reply to this conversation');
});

it('notCastCreator()', function () {
  const result = httpError.notCastCreator();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(5);
  expect(result.subCode).to.equal(3);
  expect(result.message).to.equal('Not the cast creator');
});

it('alreadyFollowing()', function () {
  const result = httpError.alreadyFollowing();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(4);
  expect(result.message).to.equal('Already following this user');
});

it('notFollowing()', function () {
  const result = httpError.notFollowing();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(5);
  expect(result.message).to.equal('Not following this user');
});

it('alreadyReminded()', function () {
  const result = httpError.alreadyReminded();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(7);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Already reminded for this cast');
});

it('notReminded()', function () {
  const result = httpError.notReminded();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(7);
  expect(result.subCode).to.equal(2);
  expect(result.message).to.equal('Not reminded for this cast');
});

it('clientExist()', function () {
  const result = httpError.clientExist();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(403);
  expect(result.code).to.equal(1);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Client exists');
});

it('userExist()', function () {
  const result = httpError.userExist();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(403);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('User exists (email address already in use)');
});

it('pseudoExist()', function () {
  const result = httpError.pseudoExist();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(403);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(2);
  expect(result.message).to.equal('User exists (pseudo already in use)');
});

it('castAuthorizationRefused()', function () {
  const result = httpError.castAuthorizationRefused();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(403);
  expect(result.code).to.equal(5);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Authorization refused');
});

it('userNotFound()', function () {
  const result = httpError.userNotFound();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(404);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Unable to find user');
});

it('conversationNotFound()', function () {
  const result = httpError.conversationNotFound();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(404);
  expect(result.code).to.equal(3);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Unable to find conversation');
});

it('messageNotFound()', function () {
  const result = httpError.messageNotFound();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(404);
  expect(result.code).to.equal(4);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Unable to find message');
});

it('userNotFound()', function () {
  const result = httpError.userNotFound();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(404);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Unable to find user');
});

it('castNotFound()', function () {
  const result = httpError.castNotFound();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(404);
  expect(result.code).to.equal(5);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Unable to find cast');
});

it('tagNotFound()', function () {
  const result = httpError.tagNotFound();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(404);
  expect(result.code).to.equal(6);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Unable to find tag');
});

it('internalServerError()', function () {
  const result = httpError.internalServerError({ error: 'Test error' });
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(500);
  expect(result.code).to.be.undefined;
  expect(result.subCode).to.be.undefined;
  expect(result.message).to.not.be.undefined;
});

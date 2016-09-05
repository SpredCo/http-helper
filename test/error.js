const expect = require('chai').expect;
const httpError = require('../').error;

it('invalidRequestError()', function () {
  const result = httpError.invalidRequestError();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.message).to.equal('Invalid request');
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

it('userNotFound()', function () {
  const result = httpError.userNotFound();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(404);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Unable to find user');
});

it('internalServerError()', function () {
  const result = httpError.internalServerError({ error: 'Test error' });
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(500);
  expect(result.code).to.be.undefined;
  expect(result.subCode).to.be.undefined;
  expect(result.message).to.not.be.undefined;
});

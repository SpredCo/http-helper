const expect = require('chai').expect;
const httpError = require('../').error;

it('testError()', function () {
  const result = httpError.testError();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(200);
  expect(result.code).to.equal(1);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('test');
});

it('invalidRequestError()', function () {
  const result = httpError.invalidRequestError();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(1);
  expect(result.subCode).to.be.undefined;
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
  expect(result.code).to.equal(3);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Invalid facebook token');
});

it('invalidUpdate()', function () {
  const result = httpError.invalidUpdate();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(400);
  expect(result.code).to.equal(4);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('You cannot update email with a external api registration');
});

it('unauthorizedUpdate()', function () {
  const result = httpError.unauthorizedUpdate();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(401);
  expect(result.code).to.equal(3);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('You only organization owner can perform this action');
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

it('userNotFound()', function () {
  const result = httpError.userNotFound();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(404);
  expect(result.code).to.equal(2);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Unable to find user');
});

it('organizationNotFound()', function () {
  const result = httpError.organizationNotFound();
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(404);
  expect(result.code).to.equal(3);
  expect(result.subCode).to.equal(1);
  expect(result.message).to.equal('Unable to find organization');
});

it('internalServerError()', function () {
  const result = httpError.internalServerError({ error: 'Test error' });
  expect(result).to.not.be.null;
  expect(result.httpCode).to.equal(500);
  expect(result.code).to.be.undefined;
  expect(result.subCode).to.be.undefined;
  expect(result.message).to.not.be.undefined;
});

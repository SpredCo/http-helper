const expect = require('chai').expect;
const helper = require('..');

it('Should return an middleware', function (done) {
  const middle = helper.requestLogger('login');
  const fakeReq = {
    originalUrl: '/logger',
    user: {
      name: 'Test logger'
    },
    method: 'GET',
    get: function (headerName) {
      return 'Basic ' + headerName;
    }
  };
  const fakeRes = {
    statusCode: 200,
    end: function (chunk, encoding) {
      done();
    }
  };

  expect(middle).to.be.a.function;
  middle(fakeReq, fakeRes, function () {
    setTimeout(fakeRes.end, 500);
  });
});

it('Should return an middleware', function (done) {
  const middle = helper.requestLogger('login');
  const fakeReq = {
    url: '/logger',
    user: {
    },
    authInfo: {
      client: {
        name: 'Test logger'
      }
    },
    method: 'POST',
    get: function (headerName) {
      return 'Basic ' + headerName;
    }
  };
  const fakeRes = {
    statusCode: 300,
    end: function (chunk, encoding) {
      done();
    }
  };

  expect(middle).to.be.a.function;
  middle(fakeReq, fakeRes, function () {
    setTimeout(fakeRes.end, 500);
  });
});

it('Should return an middleware', function (done) {
  const middle = helper.requestLogger('login');
  const fakeReq = {
    originalUrl: '/logger',
    get: function (headerName) {
      return 'Basic ' + headerName;
    },
    method: 'PATCH'
  };
  const fakeRes = {
    statusCode: 400,
    end: function (chunk, encoding) {
      done();
    }
  };

  expect(middle).to.be.a.function;
  middle(fakeReq, fakeRes, function () {
    setTimeout(fakeRes.end, 500);
  });
});

it('Should return an middleware', function (done) {
  const middle = helper.requestLogger('login');
  const fakeReq = {
    originalUrl: '/logger',
    user: {
      name: 'Test logger'
    },
    method: 'DELETE',
    get: function (headerName) {
      return 'Basic ' + headerName;
    }
  };
  const fakeRes = {
    statusCode: 500,
    end: function (chunk, encoding) {
      done();
    }
  };

  expect(middle).to.be.a.function;
  middle(fakeReq, fakeRes, function () {
    setTimeout(fakeRes.end, 500);
  });
});

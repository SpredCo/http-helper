
const lib = {
  utils: require('./lib/utils'),
  error: require('./lib/error'),
  requestLogger: require('./lib/logger'),
  sendReply: require('./lib/utils').sendReply
};

module.exports = lib;

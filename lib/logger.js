const chalk = require('chalk');
const winston = require('winston');

function requestLogger (appName) {
  return function (req, res, next) {
    req._startTime = new Date();
    const end = res.end;
    res.end = function (chunk, encoding) {
      // Get elapsed time
      const elapsedTime = new Date() - req._startTime;

      // Finish reply
      res.end = end;
      res.end(chunk, encoding);

      var statusColor = 'green';
      if (res.statusCode >= 500) statusColor = 'red';
      else if (res.statusCode >= 400) statusColor = 'yellow';
      else if (res.statusCode >= 300) statusColor = 'cyan';
      var status = chalk[statusColor](res.statusCode);

      req.url = req.originalUrl || req.url;
      var client = req.user.name || req.authInfo.client.name;
      var startDateStr = req._startTime.getDate() + '/' + (req._startTime.getMonth() + 1) + '/' + req._startTime.getFullYear() +
        ' ' + req._startTime.getHours() + ':' + req._startTime.getMinutes() + ':' + req._startTime.getSeconds();

      winston.info('[' + startDateStr + '][' + appName.toUpperCase() + '] ' +
      status + ' ' + req.url + ' From ' + client + ' Auth: ' + req.get('Authorization') + ' in ' + elapsedTime + 'ms');
    };
    next();
  };
}

module.exports = requestLogger;

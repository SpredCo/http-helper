const httpHelper = require('./index');

httpHelper.sendMail('max.guedj13@gmail.com', 'test', {username: 'Guedj'}, function (err) {
  console.log(err);
});
const httpHelper = require('./index');

httpHelper.sendMail('max.guedj13@gmail.com', 'welcome', {username: 'Guedj'}, function (err) {
  console.log(err);
});
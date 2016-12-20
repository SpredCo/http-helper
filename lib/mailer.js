const pug = require('pug');
const  helper = require('sendgrid').mail;

const mailsTemplate = {
  'welcome': {
    template: 'welcome.pug',
    object: 'Welcome to spred !'
  }
};

function sendMail(dest, type, args, cb) {
  const content = pug.renderFile(__dirname + '/../mail-template/' + mailsTemplate[type].template, args);

  const mail = new helper.Mail(
    new helper.Email('no-reply@spred.tv'),
    mailsTemplate[type].object,
    new helper.Email(dest),
    new helper.Content('text/html', content)
  );

  const sg = require('sendgrid')('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');
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });
  sg.API(request, function (err, response) {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  });
}

module.exports = sendMail;
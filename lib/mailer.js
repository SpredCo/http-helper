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

  const sg = require('sendgrid')(process.env.SENDGRID_KEY);
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
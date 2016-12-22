const pug = require('pug');
const  helper = require('sendgrid').mail;

const mailsTemplate = {
  'welcome': {
    template: 'welcome.pug',
    object: 'Welcome to spred !'
  },
  'remind-caster': {
    template: 'remindCaster.pug'
  },
  'remind-viewer': {
    template: 'remindViewer.pug'
  }
};

function getMailObject(type, args) {
  var obj = 'Missing object';

  switch (type) {
    case 'welcome':
      obj = 'Welcome to Spred !';
      break;
    case 'remind-caster':
      obj = 'Rappel: Votre cast va bientôt débuter';
      break;
    case 'remind-viewer':
      obj = 'Rappel: Le cast "' + args.cast_name + '" est sur le point de débuter';
      break;
  }

  return obj;
}

function sendMail(dest, type, args, cb) {
  const content = pug.renderFile(__dirname + '/../mail-template/' + mailsTemplate[type].template, args);

  const mail = new helper.Mail(
    new helper.Email('no-reply@spred.tv'),
    getMailObject(type, args),
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
      console.error(response.body);
      cb(err);
    } else {
      cb(null);
    }
  });
}

module.exports = sendMail;
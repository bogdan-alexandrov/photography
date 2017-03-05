var email = require('emailjs');

var server = email.server.connect({
    user: 'mail',
    password: 'pass',
    host: 'smtp.gmail.com',
    ssl: true
});

var service = function () {
    var sendMail = function (fromName, fromEmail, body, callback) {
        var mailBody = 'New message from : ' + fromEmail + '\n' + body;

        server.send({
            text: mailBody,
            from: fromName + '<' + fromEmail + '>',
            to: 'Bogi <aleksandrov.bogdan@gmail.com>',
            subject: '[PHOTOGRAPHY] - new email form ' + fromName
        }, function (err, message) {
            console.log(err || message);
        });
        callback();
    };

    return {
        sendMail: sendMail
    };
};

module.exports = service;
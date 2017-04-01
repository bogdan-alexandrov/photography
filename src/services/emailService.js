var email = require('emailjs');

var server = email.server.connect({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: process.env.EMAIL_HOST,
    ssl: process.env.EMAIL_SSL
});

var service = function () {
    var sendMail = function (fromName, fromEmail, body, callback) {
        var mailBody = 'New message from : ' + fromEmail + '\n' + body;

        server.send({
            text: mailBody,
            from: fromName + '<' + fromEmail + '>',
            to: 'Bogi <' + process.env.EMAIL_TO + '>',
            subject: '[PHOTOGRAPHY] - new email form ' + fromName
        }, function (err, message) {
            console.log(err || message);
            callback();
        });
    };

    return {
        sendMail: sendMail
    };
};

module.exports = service;
var email = require('emailjs');


var server = email.server.connect({
    user: "aleksandrov.bogdan@gmail.com",
    password: "queEn7bIg1",
    host: "smtp.gmail.com",
    ssl: true
});

// send the message and get a callback with an error or details of the message that was sent

var send = server.send({
    text: "i hope this works",
    from: "you <username@your-email.com>",
    to: "someone <aleksandrov.bogdan@gmail.com>",
    cc: "else <else@your-email.com>",
    subject: "testing emailjs"
}, function (err, message) {
    console.log(err || message);
});

module.exports = send;
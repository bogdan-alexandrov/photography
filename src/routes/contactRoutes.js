var express = require('express');
var contactRouter = express.Router();

var router = function (nav) {

    contactRouter.route('/')
        .get(function (req, res) {
            res.render('contact', {
                nav: nav,
                title: 'Contact - Bogdan Alexandrov Photography'
            });
        })
        .post(function (req, res) {
            // req.body
            var eService = require('../services/emailService.js')();
            eService.sendMail(
                req.body.name,
                req.body.email,
                req.body.message,
                function () {
                    res.status(200).send('OK');
                }
            );
        });

    return contactRouter;
};

module.exports = router;
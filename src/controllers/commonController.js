var mongodb = require('mongodb').MongoClient;

var controller = function (nav, mcache) {
    var middleware = function (req, res, next) {
        var key = '__express__' + req.originalUrl || req.url;
        var cachedBody = mcache.get(key);
        if (cachedBody) {
            res.send(cachedBody);
        } else {
            next();
        }
    };

    var home = function (req, res) {
        res.render('index', {
            nav: nav,
            title: 'Bogdan Alexandrov Photography'
        }, function (err, html) {
            var key = '__express__' + req.originalUrl || req.url;
            mcache.put(key, html, 70000000);
            console.log('Cached :' + key);
            res.send(html);
        });
    };

    var about = function (req, res) {
        res.render('about', {
            nav: nav,
            title: 'About me - Bogdan Alexandrov Photography'
        }, function (err, html) {
            var key = '__express__' + req.originalUrl || req.url;
            mcache.put(key, html, 70000000);
            console.log('Cached :' + key);
            res.send(html);
        });
    };

    var contact = function (req, res) {
        res.render('contact', {
            nav: nav,
            title: 'Contact - Bogdan Alexandrov Photography'
        }, function (err, html) {
            var key = '__express__' + req.originalUrl || req.url;
            mcache.put(key, html, 70000000);
            console.log('Cached :' + key);
            res.send(html);
        });
    };

    var sendEmail = function (req, res) {
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
    };

    var notFound = function (req, res) {
        res.render('404', {
            nav: nav,
            title: 'Contact - Bogdan Alexandrov Photography'
        });// todo set 404
    };

    return {
        home: home,
        about: about,
        contact: contact,
        sendEmail: sendEmail,
        notFound: notFound,
        middleware: middleware
    };
};

module.exports = controller;
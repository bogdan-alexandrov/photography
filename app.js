'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

var nav = [{
    link: '/',
    title: 'Home'
}, {
    link: '/albums',
    title: 'Albums',
    subItems: [{
        link: '/albums/1',
        title: 'albums - 1'
    }, {
        link: '/albums/2',
        title: 'albums - 2'
    }, {
        link: '/albums/3',
        title: 'albums - 3'
    }]
}, {
    link: '/about',
    title: 'About'
}, {
    link: '/contact',
    title: 'Contact'
}];

var albumsRouter = require('./src/routes/albumRoutes.js')(nav);
var adminRouter = require('./src/routes/adminRoutes.js')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/albums', albumsRouter);
app.use('/admin', adminRouter)
    .get('/', function (req, res) {
        res.render('index', {
            nav: nav
        });
    })
    .get('/contact', function (req, res) {
        res.render('contact', {
            nav: nav
        });
    })
    .get('/about', function (req, res) {
        res.render('about', {
            nav: nav
        });
    });

app.listen(port, function () {
    console.log('running server on port ' + port);
});
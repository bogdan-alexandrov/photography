'use strict';

require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 5000;

var nav = require('./src/services/navigation.js')();

var adminRouter = require('./src/routes/adminRoutes.js')(nav);
var albumsRouter = require('./src/routes/albumRoutes.js')(nav);
var contactRouter = require('./src/routes/contactRoutes.js')(nav);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/albums', albumsRouter);
app.use('/contact', contactRouter);
app.use('/admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', {
        nav: nav
    });
});
app.get('/about', function (req, res) {
    res.render('about', {
        nav: nav
    });
});

app.listen(port, function () {
    console.log('running server on port ' + port);
});
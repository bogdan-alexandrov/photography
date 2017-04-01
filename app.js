'use strict';

require('dotenv').config();
var port = process.env.PORT || 5000;

var mcache = require('memory-cache');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var express = require('express');
var cluster = require('cluster');

if (cluster.isMaster) {
    cluster.fork();
    //if the worker dies, restart it.
    cluster.on('exit', function (worker) {
        console.log('Worker ' + worker.id + ' died..');
        cluster.fork();
    });
} else {
    var app = express();

// BODY-PARSER
    app.use(bodyParser.urlencoded({extended: true}));

// GZIP
    app.use(compression());

// BROWSER CACHE
    app.use(function (req, res, next) {
        var cacheTypes = [
            '.css',
            '.js',
            '.jpg',
            '.png',
            '.gif',
            '.ico',
            '.svg',
            '.otf',
            '.eot',
            '.ttf',
            '.woff',
            '.woff2'
        ];
        cacheTypes.forEach(function (type) {
            if (req.url.includes(type)) {
                res.setHeader("Cache-Control", "max-age=31556926");
            }
        });
        return next();
    });

    app.use(express.static('public'));

    app.set('views', './src/views');
    app.set('view engine', 'ejs');

// ROUTES
    var nav = require('./src/services/navigation.js')();
    var albumsRouter = require('./src/routes/albumRoutes.js')(nav, mcache);
    var seoRouter = require('./src/routes/seoRoutes.js')();
    var contactRouter = require('./src/routes/commonRoutes.js')(nav, mcache);

    if (process.env.NODE_ENV !== 'production') {
        var adminRouter = require('./src/routes/adminRoutes.js')(nav);
        app.use('/admin', adminRouter);
    }

    app.use('/albums', albumsRouter);
    app.use('/', seoRouter);
    app.use('/', contactRouter);

    app.listen(port, function () {
        console.log('running server on port ' + port);
    });

    process.on('uncaughtException', function () {
        console.log(err);
        //Send some notification about the error
        process.exit(1);
    });
}
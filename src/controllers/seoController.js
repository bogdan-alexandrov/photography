var mongodb = require('mongodb').MongoClient;

var controller = function (mcache) {
    var middleware = function (req, res, next) {
        var key = '__express__' + req.originalUrl || req.url;
        var cachedBody = mcache.get(key);
        if (cachedBody) {
            res.send(cachedBody);
        } else {
            next();
        }
    };

    var sitemap = function (req, res) {
        res.render('sitemap', function (err, html) {
            putInCache(req, res, html);
        });
    };

    function putInCache(req, res, html) {
        var key = '__express__' + req.originalUrl || req.url;
        mcache.put(key, html, Number(process.env.CACHE_SERVER));
        console.log('Cached :' + key);
        res.send(html);
    }

    return {
        sitemap: sitemap,
        middleware: middleware
    };
};

module.exports = controller;
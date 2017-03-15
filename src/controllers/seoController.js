var mongodb = require('mongodb').MongoClient;
var sm = require('sitemap');

var controller = function (albumService, mcache) {
    var middleware = function (req, res, next) {
        var key = '__express__' + req.originalUrl || req.url;
        var cachedBody = mcache.get(key);
        if (cachedBody) {
            res.send(cachedBody);
        } else {
            next();
        }
    };

    var albums = function () {
        albumService.getAll(
            function (albums) {
                return albums;
            }
        )
    };

    var sitemapContent = sm.createSitemap({
        hostname: process.env.SITE_DOMAIN,
        cacheTime: 600000,        // 600 sec - cache purge period
        urls: [
            {url: '/page-1/', changefreq: 'daily', priority: 0.3},
            {url: '/page-2/', changefreq: 'monthly', priority: 0.7},
            {url: '/page-3/'},    // changefreq: 'weekly',  priority: 0.5
            {url: '/page-4/', img: "http://urlTest.com"}
        ]
    });

    var sitemap = function (req, res) {

    for (var i = 0; i < albums.length; i++) {
        sitemapContent.add({url: '/page-4/', img: "http://urlTest.com"});
    }
    sitemapContent.toXML(function (err, xml) {
        if (err) {
            return res.status(500).end();
        }
        putInCache(req, res, xml);

    });
};

function putInCache(req, res, xml) {
    var key = '__express__' + req.originalUrl || req.url;
    mcache.put(key, xml, Number(process.env.CACHE_SERVER));
    console.log('Cached :' + key);

    res.header('Content-Type', 'application/xml');
    res.send(xml);
}

return {
    sitemap: sitemap,
    middleware: middleware
};
}
;

module.exports = controller;
var mongodb = require('mongodb').MongoClient;
var sm = require('sitemap');

var controller = function (albumService) {
    var middleware = function (req, res, next) {
        next();
    };

    var sitemap = function (req, res) {
        var sitemapContent = sm.createSitemap({
            hostname: process.env.SITE_DOMAIN_FULL,
            cacheTime: 600000      // 600 sec - cache purge period
        });
        sitemapContent.add({
            url: '/',
            priority: 1,
            changefreq: 'yearly'
        });
        sitemapContent.add({
            url: '/about',
            priority: 0.3,
            changefreq: 'never'
        });
        sitemapContent.add({
            url: '/contact',
            priority: 0.3,
            changefreq: 'never'
        });
        sitemapContent.add({
            url: '/albums',
            priority: 0.9,
            changefreq: 'monthly'
        });

        albumService.getAll(function (albums) {
            for (var i = 0; i < albums.length; i++) {
                sitemapContent.add({
                    url: 'albums/' + albums[i].name,
                    priority: 0.8,
                    changefreq: 'monthly'
                    // img: "http://urlTest.com"
                });
            }

            sitemapContent.toXML(function (err, xml) {
                if (err) {
                    return res.status(500).end();
                }
                res.header('Content-Type', 'application/xml');
                res.send(xml);
            });
        });
    };

    return {
        sitemap: sitemap,
        middleware: middleware
    };
};


module.exports = controller;
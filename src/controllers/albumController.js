var mongodb = require('mongodb').MongoClient;

var albumController = function (albumService, nav, mcache) {

    var middleware = function (req, res, next) {
        var key = '__express__' + req.originalUrl || req.url;
        var cachedBody = mcache.get(key);
        if (cachedBody) {
            res.send(cachedBody);
        } else {
            next();
        }
    };

    function putInCache(req, res, html) {
        var key = '__express__' + req.originalUrl || req.url;
        mcache.put(key, html, Number(process.env.CACHE_SERVER));
        console.log('Cached :' + key);
        res.send(html);
    }

    var getIndex = function (req, res) {
        albumService.getAll(function (results) {
            res.render('albums', {
                nav: nav,
                title: 'Portfolio - Bogdan Alexandrov Photography',
                albums: results
            }, function (err, html) {
                putInCache(req, res, html);
            });
        });
    };

    var getByName = function (req, res) {
        albumService.getByName(req.params.name, function (album) {
            albumService.getAlbumPhotosCount(album, function (numberOfPhotos) {
                    var pagenum = req.query.page == 0 || req.query.page == undefined ? 1 : req.query.page;
                albumService.getAlbumPhotos(album, pagenum, function (photos) {
                    res.render('album', {
                        nav: nav,
                        title: album.title + ' - Bogdan Alexandrov Photography',
                        photos: photos,
                        album: album,
                        currPage: pagenum,
                        totalPages: Math.ceil(numberOfPhotos/15)
                    }, function (err, html) {
                        putInCache(req, res, html);
                    });
                });
            });
        });
    };

    return {
        getIndex: getIndex,
        getByName: getByName,
        middleware: middleware
    };
};

module.exports = albumController;
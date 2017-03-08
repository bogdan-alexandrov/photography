var mongodb = require('mongodb').MongoClient;

var albumController = function (albumService, nav) {

    var middleware = function (req, res, next) {
        //if validation
        next();
    };

    var getIndex = function (req, res) {
        albumService.getAll(function (results) {
            res.render('albums', {
                nav: nav,
                albums: results
            });
        });
    };

    var getByName = function (req, res) {
        albumService.getByName(req.params.name, function (album) {
            albumService.getAlbumPhotos(album, function (photos) {
                res.render('album', { //todo album value from results
                    nav: nav,
                    photos: photos,
                    album: album
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
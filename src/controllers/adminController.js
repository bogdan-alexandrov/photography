var mongodb = require('mongodb').MongoClient;

var albumController = function (adminService, nav) {

    var middleware = function (req, res, next) {
        //if validation
        next();
    };

    var deleteAllPhotos = function (req, res) {
        adminService.deleteAllPhotos(function () {
            res.send('All photos are deleted ');
        });
    };

    var initPhotos = function (req, res) {
        adminService.initPhotos(function () {
            res.send('Photos initialized ');
        });
    };

    var deleteAllAlbums = function (req, res) {
        adminService.deleteAllPhotos(function () {
            res.send('All albums are deleted ');
        });
    };

    var initAlbums = function (req, res) {
        adminService.initAlbums(function () {
            res.send('Albums initialized ');
        });
    };

    return {
        deleteAllPhotos: deleteAllPhotos,
        deleteAllAlbums: deleteAllAlbums,
        initPhotos: initPhotos,
        initAlbums: initAlbums,
        middleware: middleware
    };
};

module.exports = albumController;
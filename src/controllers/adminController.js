var mongodb = require('mongodb').MongoClient;

var albumController = function (adminService, nav) {

    var middleware = function (req, res, next) {
        //if validation
        next();
    };

    var deleteAllPhotos = function (req, res) {
        adminService.deleteAllPhotos(function () {
            res("All photos are deleted ");
        });
    };

    var initPhotos = function (req, res) {
        adminService.initPhotos(function () {
            res("Photos initialized ");
        });
    };

    return {
        deleteAllPhotos: deleteAllPhotos,
        initPhotos: initPhotos,
        middleware: middleware
    };
};

module.exports = albumController;
var mongodb = require('mongodb').MongoClient;

var url = process.env.DATABASE;

var albums = require("../albums.json");
var photos = require("../photos.json");

var adminService = function () {

    var initAlbums = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('albums');
            collection.insertMany(albums, function (err, results) {
                db.close();
                cb();
            });
        });
    };

    var initPhotos = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.insertMany(photos.reverse(), function (err, results) {
                db.close();
                cb();
            });
        });
    };

    var deleteAllAlbums = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('albums');
            collection.removeMany({}, function (err, results) {
                db.close();
                cb();
            });
        })
    };

    var deleteAllPhotos = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.removeMany({}, function (err, results) {
                db.close();
                cb();
            });
        });
    };

    var reset = function (cb) {
        deleteAllAlbums(function () {
            initAlbums(function () {
                deleteAllPhotos(function () {
                    initPhotos(function () {
                        cb();
                    })
                })
            })
        });
    };

    return {
        initAlbums: initAlbums,
        initPhotos: initPhotos,
        deleteAllAlbums: deleteAllAlbums,
        deleteAllPhotos: deleteAllPhotos,
        reset: reset
    };
};

module.exports = adminService;
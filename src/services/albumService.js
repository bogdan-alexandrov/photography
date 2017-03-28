var mongodb = require('mongodb').MongoClient;

var url = process.env.DATABASE;

var albumService = function () {

    var getAll = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('albums');
            collection.find({}).toArray(
                function (err, results) {
                    cb(results);
                }
            );
        });
    };

    var getByName = function (name, cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('albums');
            collection.findOne({name: name},
                function (err, results) {
                    cb(results);
                }
            );
        });
    };

    var getAlbumPhotos = function (album, pageNum, cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('photos');
            var nbrPerPage = 15;
            collection.find({categories: {$regex: ".*" + album.name + ".*"}})
                .skip((pageNum - 1) * nbrPerPage).limit(nbrPerPage)
                .toArray(function (err, results) {
                    cb(results);
                });
        });
    };

    var getAlbumPhotosCount = function (album, cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.count(
                {
                    categories: {$regex: ".*" + album.name + ".*"}
                }, function (err, results) {
                    cb(results);
                });
        });
    };

    return {
        getAll: getAll,
        getAlbumPhotos: getAlbumPhotos,
        getAlbumPhotosCount: getAlbumPhotosCount,
        getByName: getByName
    };
};

module.exports = albumService;
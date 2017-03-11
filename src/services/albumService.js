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

    var getAlbumPhotos = function (album, cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.find({album: album.name}).toArray(
                function (err, results) {
                    cb(results);
                }
            );
        });
    };

    return {
        getAll: getAll,
        getAlbumPhotos: getAlbumPhotos,
        getByName: getByName
    };
};

module.exports = albumService;
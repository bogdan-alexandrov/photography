var mongodb = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/photography';

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

    return {
        getAll: getAll,
        getByName: getByName
    }
};

module.exports = albumService;
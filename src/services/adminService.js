var mongodb = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/photography';

var initalAlbums = [
    {
        title: 'Paris',
        subtitle: 'Most beautiful city',
        name: 'paris',
        image: 'DSC_8478.jpg'
    }, {
        title: 'Paris B & W',
        subtitle: 'Black and white version',
        name: 'paris-bnw',
        image: 'DSC_7315.jpg'
    }, {
        title: 'Animals',
        subtitle: 'Living creatures',
        name: 'animals',
        image: 'DSC_8286.jpg'
    }
];
var initalPhotos = [
    {
        title: 'Pont Alexandre III',
        subtitle: 'Beautiful Pont Alexandre III',
        name: 'alexandre3-color',
    }, {
        title: 'Notre dame de paris',
        subtitle: 'I love this sunset',
        name: 'notre-dame',
    }, {
        title: 'Under the bridge',
        subtitle: 'Best photo ever',
        name: 'under-the-bridge',
    }
];

var adminService = function () {

    var initAlbums = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('albums');
            collection.insertMany(initalAlbums, function (err, results) {
                res.send(results);
                db.close();
            });
        });
    };

    var initPhotos = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.insertMany(initalPhotos, function (err, results) {
                res.send(results);
                db.close();
            });
            cb();
        });
    };

    var deleteAllPhotos = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.removeMany({});
            cb();
        });
    };

    return {
        initAlbums: initAlbums,
        initPhotos: initPhotos,
        deleteAllPhotos: deleteAllPhotos
    };
};

module.exports = adminService;
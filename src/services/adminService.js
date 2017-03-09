var mongodb = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/photography';

var initalAlbums = [
    {
        title: 'Paris',
        subtitle: 'Most beautiful city',
        name: 'paris',
        template: 'album_2col.ejs',
        selectedImg: 'under-the-bridge'
    }, {
        title: 'Paris B & W',
        subtitle: 'Black and white version',
        name: 'paris-bnw',
        template: 'album_3col.ejs',
        selectedImg: 'notre-dame'
    }, {
        title: 'Animals',
        subtitle: 'Living creatures',
        name: 'animals',
        template: 'album_2col.ejs',
        selectedImg: 'can-you-see-me'
    }
];
var initalPhotos = [
    {
        title: 'Pont Alexandre III',
        subtitle: 'Beautiful Pont Alexandre III',
        name: 'alexandre3-color',
        album: 'paris',
        size: '1200x682'
    }, {
        title: 'Notre dame de paris',
        subtitle: 'I love this sunset',
        name: 'notre-dame',
        album: 'paris',
        size: '1200x740'
    }, {
        title: 'Under the bridge',
        subtitle: 'Best photo ever',
        name: 'under-the-bridge',
        album: 'paris',
        size: '1200x763'
    }, {
        title: 'Chameleon',
        subtitle: 'Can you see me ?',
        name: 'can-you-see-me',
        album: 'animals',
        size: '6016x4000'
    }, {
        title: 'Montrmarte',
        subtitle: 'Shoot me',
        name: 'DSC_9592',
        album: 'paris-bnw',
        size: '1200x798'
    }
];

var adminService = function () {

    var initAlbums = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('albums');
            collection.insertMany(initalAlbums, function (err, results) {
                db.close();
            });
            cb();
        });
    };

    var initPhotos = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.insertMany(initalPhotos, function (err, results) {
                db.close();
            });
            cb();
        });
    };

    var deleteAllAlbums = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('albums');
            collection.removeMany({});
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
        deleteAllAlbums: deleteAllAlbums,
        deleteAllPhotos: deleteAllPhotos
    };
};

module.exports = adminService;
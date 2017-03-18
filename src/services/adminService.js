var mongodb = require('mongodb').MongoClient;

var url = process.env.DATABASE;

var initalAlbums = [
    {
        title: 'Paris',
        subtitle: 'The most beautiful city',
        name: 'paris',
        templateColSize: 2,
        selectedImg: 'under-the-bridge'
    }, {
        title: 'Paris B & W',
        subtitle: 'Black and white version',
        name: 'paris-bnw',
        templateColSize: 3,
        selectedImg: 'notre-dame'
    }, {
        title: 'Animals',
        subtitle: 'Living creatures',
        name: 'animals',
        templateColSize: 2,
        selectedImg: 'can-you-see-me'
    }, {
        title: 'Crystal ball',
        subtitle: 'Let\'s walk around',
        name: 'crystal-ball',
        templateColSize: 2,
        selectedImg: 'ball2'
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
    }, {
        title: 'Opera',
        subtitle: 'Opera in crystal ball',
        name: 'ball1',
        album: 'crystal-ball',
        size: '1200x800'
    }, {
        title: 'Carousel',
        subtitle: 'Carousel Les Halles',
        name: 'ball2',
        album: 'crystal-ball',
        size: '1200x800'
    }, {
        title: 'Pont Alexandre III',
        subtitle: 'Pont Alexandre III in crystal ball',
        name: 'ball3',
        album: 'crystal-ball',
        size: '1200x800'
    }, {
        title: 'Arc de triumph',
        subtitle: 'Arc de triumph in crystal ball',
        name: 'ball4',
        album: 'crystal-ball',
        size: '1200x800'
    }, {
        title: 'Metro',
        subtitle: 'Metro in crystal ball',
        name: 'ball5',
        album: 'crystal-ball',
        size: '1200x800'
    }
];

var adminService = function () {
    var initAlbums = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('albums');
            collection.insertMany(initalAlbums, function (err, results) {
                db.close();
                cb();
            });
        });
    };

    var initPhotos = function (cb) {
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.insertMany(initalPhotos, function (err, results) {
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
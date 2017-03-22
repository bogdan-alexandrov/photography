var mongodb = require('mongodb').MongoClient;

var url = process.env.DATABASE;

var initalAlbums = [
    {
        title: 'Paris',
        subtitle: 'The most beautiful city',
        name: 'paris',
        templateColSize: 2,
        selectedImg: 'the-boat'
    }, {
        title: 'Paris B & W',
        subtitle: 'Paris without colors',
        name: 'paris-bnw',
        templateColSize: 3,
        selectedImg: 'bnw-alex-3'
    }, {
        title: 'B & W',
        subtitle: 'Black and white photography',
        name: 'bnw',
        templateColSize: 3,
        selectedImg: 'doggy'
    }, {
        title: 'Animals',
        subtitle: 'Living creatures',
        name: 'animals',
        templateColSize: 2,
        selectedImg: 'chameleon'
    }, {
        title: 'Cityscapes',
        subtitle: 'Cities',
        name: 'cityscapes',
        templateColSize: 2,
        selectedImg: 'strasbourg-2'
    }, {
        title: 'Others',
        subtitle: 'Everything else',
        name: 'others',
        templateColSize: 3,
        selectedImg: 'the-beach-2'
    }, {
        title: 'Crystal ball',
        subtitle: 'Let\'s walk around',
        name: 'crystal-ball',
        templateColSize: 2,
        selectedImg: 'crystal-metro'
    }
];

var animals = [
    {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'bird-2',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'bird',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'cat',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'chameleon-2',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'chameleon',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'cheetah',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'coala',
        album: 'animals',
        size: '798hx1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'crested-gecko',
        album: 'animals',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'day-gecko-2',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'day-gecko',
        album: 'animals',
        size: '1200x675'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'eagle',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'eye-of-the-tiger',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'grace-hopper',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'leopard-gecko',
        album: 'animals',
        size: '798hx1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'lion-2',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'lion-3',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'lion-4',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'lion',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'meercat',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'mincho',
        album: 'animals',
        size: '1200x675'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'mokeys',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'panda',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'shark',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'tiger-2',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'tiger-3',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'tiger-pattern',
        album: 'animals',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'tiger',
        album: 'animals',
        size: '1200x675'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'toucan',
        album: 'animals',
        size: '1200x798'
    }
];
var bnw = [
    {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'accordeon',
        album: 'bnw',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'arc-de-triumph',
        album: 'bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'bnw-metro',
        album: 'bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'breakfast',
        album: 'bnw',
        size: '1200x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'cars',
        album: 'bnw',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'concorde-2',
        album: 'bnw',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'concorde',
        album: 'bnw',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'crystal-ball-eiffel-bnw',
        album: 'bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'crystal-ball-eiffel-bnw2',
        album: 'bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'crystal-ball-eiffel-bnw3',
        album: 'bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'doggy',
        album: 'bnw',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'eiffel',
        album: 'bnw',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'louvre-2',
        album: 'bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'lyon-3',
        album: 'bnw',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'notre-dame',
        album: 'bnw',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'paris-bnw-bench',
        album: 'bnw',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'paris-bnw-riverside',
        album: 'bnw',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'pedestrians',
        album: 'bnw',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'pieteon',
        album: 'bnw',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'rainy',
        album: 'bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'shooting-paris',
        album: 'bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'skate',
        album: 'bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'star-wars',
        album: 'bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'SMENIGO',
        name: 'stormtrooper',
        album: 'bnw',
        size: '914x1200'
    }
];
var cityscapes = [
    {
        title: 'changeit',
        subtitle: 'sub-title',
        name: 'lyon-2',
        album:'cityscapes',
        size: '1200x800',
    }, {
        title: 'changeit',
        subtitle: 'sub-title',
        name: 'lyon-3',
        album:'cityscapes',
        size: '1200x800',
    }, {
        title: 'changeit',
        subtitle: 'sub-title',
        album:'cityscapes',
        name: 'lyon-4',
        size: '1200x800',
    }, {
        title: 'changeit',
        subtitle: 'sub-title',
        album:'cityscapes',
        name: 'lyon-5',
        size: '1200x800',
    }, {
        title: 'changeit',
        subtitle: 'sub-title',
        album:'cityscapes',
        name: 'lyon-6',
        size: '1200x800',
    }, {
        title: 'changeit',
        subtitle: 'sub-title',
        album:'cityscapes',
        name: 'lyon-7',
        size: '1200x800',
    }, {
        title: 'changeit',
        subtitle: 'sub-title',
        album:'cityscapes',
        name: 'lyon',
        size: '1200x800',
    }, {
        title: 'changeit',
        album:'cityscapes',
        subtitle: 'sub-title',
        name: 'strasbourg-2',
        size: '1200x798',
    }, {
        title: 'changeit',
        subtitle: 'sub-title',
        album:'cityscapes',
        name: 'strasbourg-night',
        size: '1200x798',
    }, {
        title: 'changeit',
        album:'cityscapes',
        subtitle: 'sub-title',
        name: 'strasbourg',
        size: '1200x798',
    }
];
var crystalBal = [
    {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-arc-louvre',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-assemble',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-ball-1',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-ball-alex-3',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-ball-arc',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-ball-eiffel-bnw3',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-ball-eiffel',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-ball-london',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-bus',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-concorde',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'crystal-ball',
        name: 'crystal-metro',
        size: '1200x800'
    }
];
var parisBnW = [
    {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris-bnw',
        name: 'alex-3-bnw',
        size: '1200x675'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris-bnw',
        name: 'bnw-alex-3',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris-bnw',
        name: 'montmartre',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris-bnw',
        name: 'pont-alex-3-bnw',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris-bnw',
        name: '	statue-of-liberty',
        size: '1200x798'
    }
];
var paris = [
    {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'alex-3',
        size: '1200x682'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'bridge',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'eiffel-2',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'grand-palais',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'locked-love',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'louvre',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'montparnasse',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'moulin-rouge',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'notre-dame-3',
        size: '1200x740'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'notre-dame-4',
        size: '1200x675'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'pont-alex-3',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'roue-de-paris',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'the-boat',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'the-tower',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'paris',
        name: 'tower-place',
        size: '1200x798'
    }
];
var others = [
    {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'beach',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'bg-rose',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'bmw-blue',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'bmw-m4',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'boat',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'carroussel-2',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'coffee',
        size: '1200x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'disney',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'flight',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'freedom',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'james-bond',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'les-passants',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'london',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'mig29',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'mont-saint-michel',
        size: '1200x810'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'mountains',
        size: '798x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'rainy-2',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'rose',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'seagull',
        size: '1200x800'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'skulls',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'sofia',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'sunny-beach',
        size: '1200x651'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'the-beach-2',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'the-beach-3',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'the-beach-4',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'the-beach',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'tree',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'up-in-the-sky',
        size: '800x1200'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'veaux-le-vicompte-2',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'veaux-le-vicompte',
        size: '1200x798'
    }, {
        title: 'CHANGEIT',
        subtitle: 'CHANGEIT',
        album: 'others',
        name: 'wine',
        size: '798x1200'
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
    
    var insertPhotos = function(photos){
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('photos');
            collection.insertMany(photos, function (err, results) {
                db.close();
            });
        });
    };

    var initPhotos = function () {

        insertPhotos(animals);
        insertPhotos(bnw);
        insertPhotos(cityscapes);
        insertPhotos(crystalBal);
        insertPhotos(parisBnW);
        insertPhotos(paris);
        insertPhotos(others);

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
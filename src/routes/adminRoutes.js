var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var albums = [
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

var router = function (nav) {
    adminRouter.route('/initAlbums')
        .get(function (req, res) {
            var url =
                'mongodb://localhost:27017/photography';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('albums');
                collection.insertMany(albums, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });
        });
    return adminRouter;
};

module.exports = router;
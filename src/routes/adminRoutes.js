var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var albums = [
    {
        title: 'Paris',
        subtitle: 'Most beautiful city',
        name: 'paris'
    },    {
        title: 'Paris B & W',
        subtitle: 'Black and white version',
        name: 'paris-bnw'
    },    {
        title: 'Animals',
        subtitle: 'Living creatures',
        name: 'animals'
    }
];

var router = function (nav) {
    adminRouter.route('/addAlbum')
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
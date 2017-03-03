var express = require('express');
var albumRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function (nav) {

    albumRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/photography';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('albums');
                collection.find({}).toArray(
                    function (err, results) {
                        res.render('albums', {
                            nav: nav,
                            albums: results
                        });
                    }
                );
            });
        });
    albumRouter.route('/:name')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/photography';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('albums');
                collection.findOne({name: req.params.name},
                    function (err, results) {
                        res.render('album', {
                            nav: nav,
                            album: results
                        });
                    });
            });
        });
    return albumRouter;
};

module.exports = router;
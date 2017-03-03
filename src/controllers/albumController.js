var mongodb = require('mongodb').MongoClient;

var albumController = function (albumService, nav) {

    var middleware = function (req, res, next) {
        //if validation
        next();
    };

    var getIndex = function (req, res) {
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
    };

    var getByName = function (req, res) {
        var url = 'mongodb://localhost:27017/photography';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('albums');
            collection.findOne({name: req.params.name},
                function (err, results) {
                    res.render('album', {
                        nav: nav,
                        album: results
                    });
                }
            );
        });
    };

    return {
        getIndex: getIndex,
        getByName: getByName,
        middleware: middleware
    }
};

module.exports = albumController;
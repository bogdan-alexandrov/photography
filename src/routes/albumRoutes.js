var express = require('express');
var albumRouter = express.Router();

var router = function (nav) {

    var albumService = require('../services/albumService.js')();
    var albumController = require('../controllers/albumController')(albumService, nav);

    albumRouter.use(albumController.middleware);

    albumRouter.route('/')
        .get(albumController.getIndex);
    albumRouter.route('/:name')
        .get(albumController.getByName);

    return albumRouter;
};

module.exports = router;
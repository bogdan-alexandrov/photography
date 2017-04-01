var express = require('express');
var seoRouter = express.Router();

var router = function () {
    var albumService = require('../services/albumService.js')();
    var controller = require('../controllers/seoController.js')(albumService);

    seoRouter.use(controller.middleware);

    seoRouter.route('/sitemap.xml').get(controller.sitemap);

    return seoRouter;
};

module.exports = router;
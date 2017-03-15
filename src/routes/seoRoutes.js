var express = require('express');
var seoRouter = express.Router();

var router = function (nav, mcache) {
    var controller = require('../controllers/seoController.js')(mcache);
    seoRouter.use(controller.middleware);

    seoRouter.route('/sitemap.xml').get(controller.sitemap);

    return seoRouter;
};

module.exports = router;
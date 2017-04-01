var express = require('express');
var commonRouter = express.Router();

var router = function (nav, mcache) {
    var controller = require('../controllers/commonController.js')(nav, mcache);
    commonRouter.use(controller.middleware);

    commonRouter.route('/').get(controller.home);
    commonRouter.route('/about').get(controller.about);
    commonRouter.route('/contact').get(controller.contact);
    commonRouter.route('/contact').post(controller.sendEmail);
    commonRouter.route('*').get(controller.notFound);

    return commonRouter;
};

module.exports = router;
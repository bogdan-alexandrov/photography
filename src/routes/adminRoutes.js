var express = require('express');
var adminRouter = express.Router();

var router = function (nav) {
    var service = require('../services/adminService.js')();
    var controller = require('../controllers/adminController.js')(service, nav);

    adminRouter.use(controller.middleware);

    adminRouter.route('/deleteAllPhotos')
        .get(controller.deleteAllPhotos);
    adminRouter.route('/initPhotos')
        .get(controller.initPhotos);

    return adminRouter;
};

module.exports = router;
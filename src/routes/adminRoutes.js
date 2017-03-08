var express = require('express');
var adminRouter = express.Router();

var router = function (nav) {
    var service = require('../services/adminService.js')();
    var controller = require('../controllers/adminController.js')(service, nav);

    adminRouter.use(controller.middleware);

    adminRouter.route('/delete/photos')
        .get(controller.deleteAllPhotos);
    adminRouter.route('/init/photos')
        .get(controller.initPhotos);

    adminRouter.route('/delete/albums')
        .get(controller.deleteAllAlbums);
    adminRouter.route('/init/albums')
        .get(controller.initAlbums);

    return adminRouter;
};

module.exports = router;
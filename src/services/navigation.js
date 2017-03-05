var nav = function () {
    var albumService = require('./albumService.js')();

    var albumsLinks = [];
    albumService.getAll(function (albums) {
        for (var album in albums) {
            albumsLinks.push({
                link: '/albums/' + albums[album].name,
                title: albums[album].title
            });
        }
    });

    return [{
        link: '/',
        title: 'Home'
    }, {
        link: '/albums',
        title: 'Albums',
        subItems: albumsLinks
    }, {
        link: '/about',
        title: 'About'
    }, {
        link: '/contact',
        title: 'Contact'
    }];
};

module.exports = nav;

'use strict';

var gulp = require('gulp');
var nodeman = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.html', 'src/**/*.ejs', 'public/css/*.css', 'public/js/*.js'];

gulp.task('serve', function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: jsFiles
    };

    return nodeman(options).on('restart', function (ev) {
        console.log('restarting');
    });
});
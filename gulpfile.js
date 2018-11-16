'use strict';

var gulp = require('gulp'),
    favicons = require("gulp-favicons");

var icons = (function() {
    return {
        compile: function(config) {
          gulp.src(config.src + 'favicon.src.png')
              .pipe(favicons({
                  appName: "My Favicons",
                  appDescription: "These are my Favicons",
                  developerName: "Bryan Colosky",
                  developerURL: "http://bryancolosky.com/",
                  background: config.background,
                  path: config.path,
                  url: "http://bryancolosky.com/",
                  display: "standalone",
                  orientation: "portrait",
                  version: 1.0,
                  logging: false,
                  online: false,
                  html: config.html,
                  replace: true
              }))
              .pipe(gulp.dest(config.dest));

            return this;
        }
    };
}());

gulp.task('icons', function() {
    return icons
        .compile({
            // Favicon .png source file
            src: 'images/favicons/',
            // Destination of generated favicons
            dest: 'images/favicons/',
            // Html source to write favicon <link>'s
            html: '_includes/favicons.html',
            // Favicon <link src="..."> paths
            path: '/images/favicons/',
            // Background for generated tiles for monchrome images ie. Windows tiles
            background: 'transparent'
        });

});

gulp.task('watch', function() {
    gulp.watch(['images/favicons/favicon.src.png'], ['icons']);
});

gulp.task('default', ['icons', 'watch']);

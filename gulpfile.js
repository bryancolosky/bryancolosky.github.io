const { src, dest, parallel, series, watch } = require('gulp');
const favicons = require('favicons').stream;
const responsive = require('gulp-responsive');

function responsiveImages() {
  return src('src/images/**/*.{png,jpg}')
    .pipe(responsive(
      {
      '**/*.{png,jpg}': [{
        width: 760,
        rename: {
          suffix: '-default',
        },
      },{
        width: 760 * 2,
        rename: {
          suffix: '-default@2x',
        },
      },{
        width: 320,
        rename: {
          suffix: '-mobile-s',
        },
      }, {
        width: 320 * 2,
        rename: {
          suffix: '-mobile-s@2x',
        },
      }, {
        width: 375,
        rename: {
          suffix: '-mobile-m',
        },
      }, {
        width: 375 * 2,
        rename: {
          suffix: '-mobile-m@2x',
        },
      }, {
        width: 425,
        rename: {
          suffix: '-mobile-l',
        },
      }, {
        width: 425 * 2,
        rename: {
          suffix: '-mobile-l@2x',
        },
      }, {
        width: 768,
        rename: {
          suffix: '-tablet',
        },
      }, {
        width: 768 * 2,
        rename: {
          suffix: '-tablet@2x',
        },
      }, {
        width: 1024,
        rename: {
          suffix: '-laptop',
        },
      }, {
        width: 1024 * 2,
        rename: {
          suffix: '-laptop@2x',
        },
      }, {
        width: 1440,
        rename: {
          suffix: '-laptop-l',
        },
      }, {
        width: 1440 * 2,
        rename: {
          suffix: '-laptop-l@2x',
        },
      }, {
        width: 1920,
        rename: {
          suffix: '-desktop',
        },
      }, {
        width: 1920 * 2,
        rename: {
          suffix: '-desktop@2x',
        },
      }, {
        width: 2560,
        rename: {
          suffix: '-desktop-hd',
        },
      }, {
        width: 2560 * 2,
        rename: {
          suffix: '-desktop-hd@2x',
        },
      }],
    }, {
      quality: 80,
      progressive: true,
      withMetadata: false,
      errorOnEnlargement: false
    }
    ))
    .pipe(dest('dist/images'))
}

function icons() {
  return src('src/favicons/favicon.src.png')
    .pipe(favicons({
        appName: "Bryan Colosky's Portfolio",
        appShortName: "Portfolio",
        appDescription: "Welcome to the portfolio of Bryan Colosky.",
        developerName: "Bryan Colosky",
        developerURL: "http://bryancolosky.com/",
        background: "white",
        path: "/dist/favicons",
        url: "http://bryancolosky.com/",
        display: "standalone",
        orientation: "portrait",
        version: 1.0,
        logging: false,
        html: "../../_includes/favicons.html",
        pipeHTML: true,
        replace: true
    }))
    .pipe(dest('dist/favicons'))
}

exports.images = responsiveImages;
exports.favicons = icons;
exports.default = parallel(icons, responsiveImages);

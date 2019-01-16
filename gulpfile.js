const { src, dest, parallel, series, watch } = require('gulp');
const favicons = require('favicons').stream;

function images() {
  return src('src/favicons/favicon.src.png')
    .pipe(responsive({
      '*.jpg': [{
        width: 300,
        rename: {
          suffix: '-300px',
        }
      }, {
        width: 600,
        rename: {
          suffix: '-600px',
        }
      }, {
        width: 1900,
        rename: {
          suffix: '-1900px'
        }
      }, {
        width: 630,
        rename: {
          suffix: '-630px'
        }
      }
      ]}, {
      quality: 80,
      progressive: true,
      withMetadata: false,
      errorOnEnlargement: true,
    }))
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

function watch(){
  gulp.watch('src/favicons/*.src.png', icons)
}

exports.images = images;
exports.favicons = icons;
exports.watch = watch

exports.default = parallel(icons);

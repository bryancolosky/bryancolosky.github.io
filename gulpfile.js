const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cp = require("child_process");
const env = process.env.NODE_ENV || 'develop';
const bundleJekyllRb = process.platform === 'win32' ? 'bundle.bat' : 'bundle';
const favicons = require('favicons').stream;
const responsive = require('gulp-responsive');
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

function dist(done) {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return reject(err)
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')))
      }
      resolve()
    })
  })
}

function responsiveImages() {
  return gulp.src('images/**/*.{png,jpg}')
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
    .pipe(gulp.dest('dist/images'))
}

function icons() {
  return gulp.src('favicons/favicon.src.png')
    .pipe(favicons({
        appName: "Bryan Colosky's Portfolio",
        appShortName: "Portfolio",
        appDescription: "Welcome to the portfolio of Bryan Colosky.",
        developerName: "Bryan Colosky",
        developerURL: "http://bryancolosky.com/",
        background: "transparent",
        path: "/dist/favicons",
        url: "http://bryancolosky.com/",
        display: "standalone",
        orientation: "portrait",
        version: 1.0,
        logging: false,
        html: "../../html/favicons.html",
        pipeHTML: true,
        replace: true
    }))
    .pipe(gulp.dest('dist/favicons'))
}

function jekyll(env) {
  if (env === 'production') {
    return jekyllProd = done => cp.spawn(bundleJekyllRb, ['exec', 'jekyll', 'build'], { stdio: 'inherit'});
  } else {
    return jekyllDev = done => cp.spawn(bundleJekyllRb, ['exec', 'jekyll', 'build', '--incremental', '--drafts'], { stdio: 'inherit'});
  }
}

function server(done) {
  browserSync.init({
    server: {
      baseDir: "./_site/",
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    files: ['./_site/*.*'],
    port: 8080,
    host: "localhost",
  });
  done();
}


function reload(done) {
  browserSync.reload()
  done()
}

function watchFiles() {
  gulp.watch(
    '**/*.{html,markdown,md,yml,json,xml,pdf}',
    {
      ignored: ['_site/**/*', 'dist/**/*', 'node_modules/**/*']
    },
  gulp.series(jekyll('development'), reload));
  gulp.watch(
    '**/*.{css,scss,sass,js}',
    {
      ignored: ['_site/**/*', 'dist/**/*', 'node_modules/**/*']
    },
  gulp.series(dist, jekyll('development'), reload));
  gulp.watch(
    'images/*.{png,jpg,jpeg}',
    {
      ignored: ['_site/**/*', 'dist/**/*', 'node_modules/**/*']
    },
  gulp.series(responsiveImages, jekyll('development'), reload));
  gulp.watch(
    'favicons/*.{svg,png}',
    {
      ignored: ['_site/**/*', 'dist/**/*', 'node_modules/**/*']
    },
  gulp.series(icons, jekyll('development'), reload));
}

const bundle = dist;
const artwork = gulp.series(icons, responsiveImages);
const markdown = jekyll('development');
const production = gulp.series(bundle, jekyll('production'));
const develop = gulp.series(bundle, artwork, markdown, server, watchFiles);

exports.images = responsiveImages;
exports.favicons = icons;
exports.art = artwork;
exports.default = develop;

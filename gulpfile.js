const gulp = require("gulp");

const browserSync = require('browser-sync').create();
const cp = require("child_process");
const env = process.env.NODE_ENV || 'develop';
const bundleJekyllRb = process.platform === 'win32' ? 'bundle.bat' : 'bundle';

const favicons = require('favicons').stream;

const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

function app(done) {
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

function jekyll(env) {
  if (env === 'production') {
    return buildProd = done => cp.spawn(bundleJekyllRb, ['exec', 'jekyll', 'build'], { stdio: 'inherit'});
  } else {
    return buildDev = done => cp.spawn(bundleJekyllRb, ['exec', 'jekyll', 'build', '--drafts'], { stdio: 'inherit'});
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

function watch() {
  gulp.watch(
    '**/*.{html,markdown,md,yml,json,xml,pdf,css,scss,sass,js}',
    {
      ignored: ['_site/**/*', 'dist/**/*', 'node_modules/**/*']
    },
  gulp.series(app, jekyll('development'), reload))
}

const build = gulp.series(app, jekyll('production'));
const develop = gulp.series(app, jekyll('development'), server, watch);

exports.build = build;
exports.default = develop;

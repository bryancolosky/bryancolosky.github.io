const { src, dest, parallel } = require('gulp');
const favicons = require('favicons').stream;

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

exports.favicons = icons;
exports.default = parallel(icons);

watch('src/favicons/*.src.png', series(icons));

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('precss'),
    require("autoprefixer"),
    require('cssnano')
  ]
}

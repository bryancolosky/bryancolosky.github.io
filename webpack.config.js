const pkg = require('./package.json')
const path = require('path')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    app:    ['./js/app.js'],
    styles: ['./scss/app.scss'],
    resize: './js/resize.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: [/.js$|.ts$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/typescript',
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          noquotes: true
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/assets/'
            }
          }
        ]
      },
      {
        test: [/.css$|.scss$/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'dist/'
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['./node_modules']
            }
          }
        ],
      }
    ]
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'components'),
      '@styles': path.resolve(__dirname, 'scss'),
      '@img': path.resolve(__dirname, 'images'),
      '@': path.resolve(__dirname, '')
    },
    modules: [
      'node_modules',
      path.resolve(__dirname, '')
    ],
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      inject: false,
      template: path.resolve(__dirname, './html/index.html'),
      filename: path.resolve(__dirname, './_layouts/default.webpack.html'),
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      inject: false,
      template: path.resolve(__dirname, './html/favicons.html'),
      filename: path.resolve(__dirname, './_includes/meta/favicons.webpack.html'),
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
}

var path = require('path');
var webpack = require('webpack');

module.exports = {
  quiet: true,
  entry: [
    './static/js/todo/Todo'
  ],
  output: {
    path: __dirname + '/dist/static/todo/',
    filename: 'Todo.min.js',
    publicPath: '/js/todo/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, './static/js/todo/')
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
       compress: {
          warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
};

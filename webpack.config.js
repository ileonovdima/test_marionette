var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './app/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    libraryTarget: 'umd'
  },


  resolve: {
    modulesDirectories: ['node_modules']
  },


  module: {
      loaders: [
          { test: /\.html$/, loader: "underscore-template-loader" },
      ]
  }

};

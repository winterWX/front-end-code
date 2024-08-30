const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.base.config.js');
const env = require('../config/pro.conf.js')


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // 相比inline-source-map 性能好,不在包内部，体积小
  plugins: [ // 压缩JS
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
});



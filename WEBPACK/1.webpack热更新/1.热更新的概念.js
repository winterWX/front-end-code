/****
 * 
 * 1. 无需完全刷新整个页面的同时,更新模块,只需要局部刷新页面上发生变化的模块，
 * 同时保留当前页面的状态(比如复选框的状态和输入框的状态)。HMR的好处。 节省开发时间,提高开发体验验。
 * 
*/

/***
 *  1.步骤一进行配置开启 热更新
*/

// webpack.config.js
const webpack = require('webpack');
const path = require('path');
 
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js' // Your main entry file
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    // Your module configurations
  },
  // ...
  devServer: {
    hot: true, // Enable HMR
    onlyHot: true, // 当存在错误时进行更新
    contentBase: path.resolve(__dirname, 'dist'), // Serve the "dist" directory
    // ...
  }
};

//在主文件入口(index.js)中处理模块替换
// index.js
if (module.hot) {
    module.hot.accept();

    // 定制化制定，需要更新的文件
    module.hot.accept('./child', () => {
        console.log('child.js文件进行了更新')
    });
}

//启动webpack-dev-server时,会将hotModuleReplacementPlugin注入到bundle中，
//编译后会生成新的hash值 和 编译后的新文件
//hash值为新的标识符，做为下一次文件更新的标识符, c: 代表要更新的模块

2. 当文件更新后就会编译成更新后的文件, 编译后的文件就会调用webpackHotUpdate,根据模块标识就行更新


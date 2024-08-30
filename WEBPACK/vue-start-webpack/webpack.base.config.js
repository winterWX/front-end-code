const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js'] // 把babel-polyfill,也打包进去用于解析ES6+的一些新语法（Promise等）
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '根据环境分离配置',
      template: './public/index.html', // 用于挂载打包后的文件的 模板（ejs,html等）,默认为lodash-template
      filename: 'index.html', // 打包后的生成的html的路径和文件名，路径的相对于 output.path的
      hash: true, //true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值，添加hash形式如下所示
      inject: true,
      // 向templat中注入所有静态资源，不同的配置值注入的位置不经相同。
      /*  1、true或者body：所有JavaScript资源插入到body元素的底部
       2、head: 所有JavaScript资源插入到head元素中
       3、false： 所有静态资源css和JavaScript都不会注入到模板文件中 */
      favicon: './public/favicon.ico',// 配置ico图标
      minify: {// html压缩  配置：html-minifier
        removeComments: true, //去掉注释
        collapseWhitespace: true, //去掉空行
      },
      chunks: 'all', // 当有多个入口 ，输出多个html时,指定当前的fliename对应的html文件加载的js包名称（对应 entry配置的文件名 eg: ['app']）
      excludeChunks: [], // 和上面相反
      showErrors: true, // 如果 webpack 编译出现错误，webpack会将错误信息包裹在一个 pre 标签内，属性的默认值为 true ，也就是显示错误信息。
      config: { // 自定义变量 随意配置 htmlWebpackPlugin.options 访问
        customerVar: 'ssss'
      },
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'), // 绝对路径
    // publicPath: '/' // 为了在本地直接打开打包的文件暂时注释
  },
  module: {  // 解析除js json等外的文件类型的解析器
    rules: [
      { // 使用babel-loader把一些有兼容性的写法编译成基本的（let const 箭头函数等）
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

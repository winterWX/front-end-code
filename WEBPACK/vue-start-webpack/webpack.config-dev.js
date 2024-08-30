// const path = require("path");
// const { VueLoaderPlugin } = require("vue-loader");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { webpack, optimize } = require("webpack");
// const apiConfig = require('./config/api');
// const { threadId } = require("worker_threads");
// module.exports = {
//     mode: 'dev',
//     entry: "./src/main.js",
//     output: {
//         path: path.resolve(__dirname, "dist"),    //统一操作系统不同的路径
//         filename: "bundle.js"
//     },
//     module: {
//         rules: [
//             { test: /\.vue$/, use: "vue-loader" },
//             // style-loader 将样式通过 style 的形式注入到标签中  
//             { test: /\.s[ca]ss&/, use: ["style-loader", "css-loader", "scss-loader"] },
//             {
//                 test: /\.m?js$/,
//                 use: {
//                     loader: ['cache-loader', 'babel-loader'], // 给开销较大loader前添加cache-loader, 将结果缓存到磁盘里，提升第二次构建速度
//                     options: {
//                         presets: ["@babel/preset-env"]
//                     },
//                 },
//                 include: path.resolve(__dirname,'src'),    //设置编译范围
//                 exclude: path.resolve(__dirname,'node_module')   // 排除编译范围
//             },
//             { test: /\.(png|jpe?g|gif|svg|webp)$/, type: "asset/resource" }
//         ]
//     },
//     plugins: [
//         new VueLoaderPlugin(),
//         // 为代码注入全局变量
//         new webpack.definePlugin({
//             API_BASE_URL: '"https://api.example.com"'
//         })
//     ],
//     //解析模块的规则
//     resolve:{  
//         // 给层级较深的路径,指定别名，减少查询过程
//         alias: {
//             "@": path.resolve(__dirname, './src')
//         },
//         extensions: ['.js','.md'],  // webpack会根据文件文件自动查找数组后缀，给文件添加后缀
//         module: [path.resolve(__dirname,'node_modules')]  // 指明第三方模块存放的位置,减少搜素步骤
//     },
//     optimization:{
//         // 提取公共代码，形成单独bundle
//         splitChunks:{
//             chunks: 'all'
//         }
//     },
//     devServer:{
//         hot: true, // 开启热更新
//         open: true,
//         port: 8080,
//         static: path.join(__dirname,'dist')
//     }
// } 


const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');
const webpack = require('webpack');
const env = require('../config/dev.conf.js')
module.exports = merge(common, {
  devtool: 'inline-source-map', //  sourceMap
  devServer: {
    noInfo: true,// 不在cmd/编译器的控制台打印打包的信息，有警告、错误还是会爆出来
    compress: true, // 启用gzip 压缩：
    host: "0.0.0.0",// 默认localhost
    port: 9000, // 端口
    publicPath: "/",
    hot: true,// 启用热替换
    inline: true,
    proxy: { // 代理 基于http-proxy-middleware
      "/api": {
        target: "http://192.168.152.55:6666",
        pathRewrite: { "^/api": "" }
      }
    },
    // https: true,// 启用https服务器 默认http （会被浏览器拦截，可以在浏览器开启）
    open: true,//自动打开浏览器
    // openPage: 'http://localhost:9000', // 浏览器默认打开的页面
    useLocalIp: true, // 使用本地Ip打开页面
    overlay: true,// 编译发生错误时在浏览器窗口提示
    after () { // 提供在服务器内部所有其他中间件之后执行自定义中间件的能力
      console.log('\n 你的服务已启动： http://localhost:9000 \n Ctrl+C 结束')
    }
  },
  plugins: [
    new webpack.DefinePlugin({ // 定义环境和变量
      'process.env': env
    }),
    // 接入动态链接库
    new webpack.DllPlugin({
        name: '_dll_[name]',
        path: path.join(__dirname,"[name].manifest.json")
    })
  ]
});

const path = require('path');
// ProvidePlugin 公共依赖提升到全局
// CleanWebpackPlugin 删除上一次的打包文件
// 自动构建html插入到页面中
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取js中css文件成单文件 --- CSS分离
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 优化css输出文件 删除重复和没有用到的资源 
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 用来优化js的体积，包括重命名变量，删除没有访问到的代码块儿
const TerserPlugin = require('terser-webpack-plugin');
// 开辟新的线程进程ts的类型验证
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// 分析打包资源的大小
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// eslint
const ESLintPlugin = require('eslint-webpack-plugin');

const { DEV, DEBUG } = process.env;

process.env.BABEL_ENV = DEV ? 'development' : 'production';
process.env.NODE_ENV = DEV ? 'development' : 'production';

module.exports = {
    entry: path.resolve(__dirname, "src/main.js"),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    devServer: {
        port: 8080,
    },
    mode: DEV ? 'development' : 'production',
    devtool: DEV && 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // 处理 .less
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // less-loader
                    {
                        loader: 'less-loader',
                        options: {
                            // 进行主题定制  
                            lessOptions: {
                                // 替换antd的变量，去掉 @ 符号即可
                                // https://ant.design/docs/react/customize-theme-cn
                                modifyVars: {
                                    'primary-color': '#1DA57A',
                                    'border-color-base': '#d9d9d9', // 边框色
                                    'text-color': '#d9d9d9'
                                },
                                javascriptEnabled: true, // 支持js
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: !!DEV,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !!DEV,
                        },
                    },
                ],
            },
            {
                test: /\.png/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: false,
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        minimize: !DEV,
        splitChunks: {
            minSize: 500000,
            cacheGroups: {
                vendors: false,
            },
        },
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx', '.less', 'scss'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            filename: 'app.html',
            inject: 'body',
        }),
        DEBUG && new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
        }),
        new ESLintPlugin(),
        new ForkTsCheckerWebpackPlugin(),
    ].filter(Boolean),
};
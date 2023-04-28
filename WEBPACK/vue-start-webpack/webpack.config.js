const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),    //统一操作系统不同的路径
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.vue$/, use: "vue-loader" },
            { test: /\.s[ca]ss&/, use: ["style-loader", "css-loader", "scss-loader"] },
            {
                test: /\.m?js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            { test: /\.(png|jpe?g|gif|svg|webp)$/, type: "asset/resource" }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
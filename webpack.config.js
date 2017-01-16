var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "cheap-module-source-map",
    entry: "./main.js",
    output: {
        path: "./build",
        filename: "app-[hash].js"
    },
    module: {
        loaders: [
            // babel loader配置
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        // 实现版权声明的插件
        new webpack.BannerPlugin('Copyright Jesse Hu inc.'),
        // 根据模板生成Html文件，自动引入大包后的Js文件
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"
        })
    ]
}
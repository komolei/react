const path = require('path');
const webpack = require('webpack');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UgLifyJsPlugin = require("uglifyjs-webpack-plugin");
// const 
// let app = './app.js'
let app = { app: ['babel-polyfill', 'react-hot-loader/patch', './app.js'] }
// let app = { app: ['babel-polyfill', './app.js'] }
module.exports = {
    entry: app,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "./dist/"
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, "./"),
        publicPath: './'
    },
    resolve:{
        alias:{
            im:path.resolve(__dirname,"./js/index.jsx"),
            tryagain:path.resolve(__dirname,"./js/tryagain.jsx"),
        }
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_moudles/,
                use: {
                    loader: "babel-loader",
                    //  options: {
                    //     presets: [
                    //         "es2015", {
                    //             "modules": false,
                    //         }]
                    // }
                }
            },
            {
                test: /\.scss$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader", {
                            loader: "sass-loader"
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }
            }

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.HotModuleReplacementPlugin({
        //     // Options...
        // }),
        new extractTextWebpackPlugin("[name].css"),
        // new UgLifyJsPlugin({
        //     compress: true,
        //     mangle: true,
        //     beautify: true,
        //     // comments: true,
        // })
    ]
}
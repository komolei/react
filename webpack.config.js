const path = require('path');
const webpack = require('webpack');
// const 
// let app = './app.js'
let app = { app: ['babel-polyfill', 'react-hot-loader/patch', './app.js'] }
module.exports = {
    entry: app,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "./dist/"
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, "./"),
        publicPath: './dist'
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
                use: [
                    "style-loader", "css-loader", {
                        loader: "sass-loader"
                    }
                ]
            }
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'css-loader',
            //         options: {
            //             sourceMap: true
            //         }
            //     }
            // }

        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
        new webpack.HotModuleReplacementPlugin({
            // Options...
        })
    ]
}
const path = require('path');
// const 
// let app = './app.js'
let app = { app: ['babel-polyfill', './app.js'] }
module.exports = {
    entry: app,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_moudles/,
                use: {
                    loader: "babel-loader",
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
    }

}
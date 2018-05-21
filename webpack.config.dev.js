var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.jsx$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};
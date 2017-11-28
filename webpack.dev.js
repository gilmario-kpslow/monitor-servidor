const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        contentBase: './public',
        historyApiFallback: true,
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})
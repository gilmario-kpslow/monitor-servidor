const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: `${__dirname}/public`,
        filename: './app.js'
    },
    resolve: {
        extensions:['.js','.jsx'],
        alias:{
            modules: `${__dirname}/node_modules`,
            jquery: 'modules/jquery/dist/jquery.min.js',
            bootstrapjs: 'modules/bootstrap/dist/js/bootstrap.bundle.min.js'
        }
    },
    devtool: 'inline-source-map',
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
         }),
        new ExtractTextPlugin('app.css')
    ],
    module:{
        rules:[
            {
            test: /.js[x]?$/,
            loader:'babel-loader',
            exclude:/node_modules/,
            query:{
                presets:['es2015','react'],
                plugins:['transform-object-rest-spread']
            }
        },
        {
            test:/\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            test:/\.png|.jpg|.jpeg|.gif|.woff|.woff2|.ttf|.eot|svg*.*$/,
            use:[
                {
                    loader: 'file-loader'
                }
            ]
            
        }
    ]}
}
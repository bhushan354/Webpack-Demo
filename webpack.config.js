const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {

    mode: 'development',

    entry: './src/index.js',
    output: {
        filename: 'awesome.js',
        path: path.resolve(__dirname, 'dist'),
    },

    //loaders
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]

            },
        ],
    },

    //plugins
    plugins: [
        new BundleAnalyzerPlugin() 
    ],

    //webpack-dev-server = for  live changing things
    devServer: {
    contentBase: path.join(__dirname, 'public'),
    port : 9000
    }

};
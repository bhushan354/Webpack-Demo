const path = require('path');


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

};
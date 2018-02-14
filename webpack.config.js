const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8888',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader/webpack!babel-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

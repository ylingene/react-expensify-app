const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader' // users node-sass in bg
            ]
        }]
    },
    // source maps to find location of problem in code
    // look more on webpack.js.org docs
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
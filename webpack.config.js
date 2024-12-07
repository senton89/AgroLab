const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Your main JS file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            // Other loaders...
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/components/Label.html', // Path to your HTML file
            filename: 'index.html', // Output file name
        }),
    ],
    // Other configurations...
};
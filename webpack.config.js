
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./index.html",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "boundle.js"
    },
    devServer: {
        port: 8083
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.mc$/,
                loaders: ['./demo.js']
            },
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin()
    ]
}
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    mode: "development",
    entry: ["./src/main.js"],
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js",
        // public: "https://www.xxx.com"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:4].[ext]',
                            outputPath: 'images',
                            limit: 10240
                        },
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: "./build.js",
        port: 3000,
        open: true,
        hot: true
    }
};

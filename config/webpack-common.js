var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: ["./src/main.js"],
    output: {
        path: path.resolve(__dirname, "../build/"),
        filename: "[name].js",
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
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: "font/",
                            name: "[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(sc|sa)ss$/,
                use: ["style-loader", "css-loader", "sass-loader",
                    {   //给css3加前缀
                        loader: 'postcss-loader',
                        options: {  //可以转成另外配置postcss.ocnfig.js文件
                            plugins: [require('autoprefixer')]
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader',
                    {   //给css3加前缀
                        loader: 'postcss-loader',
                        options: {  //可以转成另外配置postcss.ocnfig.js文件
                            plugins: [require('autoprefixer')]
                        }
                    }
                ]
            },
            //全局注入jquery单个插件
            {
              test: require.resolve('jquery'),    //获取模块的绝对路径，只作用于jquery
               use: {
                   loader: "expose-loader",
                   options: "$"
               }
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
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $ : "jquery",
            jQuery: "jquery",
        })
    ]
};

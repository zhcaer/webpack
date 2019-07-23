const webpack = require('webpack');
const path = require("path");
const devConfig = require("./webpack.dev.js");
const prodConfig = require("./webpack.prod.js");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const commConfig = {
    entry: ["./src/main.js"],
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
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    resolve:{
        extensions: ['.tsx' ,'.ts', '.js','.vue','.json'],// 扩展名省略配置
        alias:{
            "@":path.resolve(__dirname,"../src")
        }
    },
    plugins:[
        new HtmlWebpackPlugin({ //自动生成HTML
            template: "index.html"
        }),
        new CleanWebpackPlugin(),   //自动清除build目录
        new webpack.ProvidePlugin({ //注入全局变量
            $ : "jquery",
            jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],
    optimization: { //代码分割
        splitChunks: {
            chunks: 'all', // 3个值async initial， all,针对异步，同步，所有代码做分割
            minSize: 30000, // 引入的包或者模块大于30000个字节才会做代码分割,针对于同步加载的模块才有效
            maxSize: 0, // 当打包的内容超出这个值之后，会尝试二次打包，拆分不了的部分，就无法拆分
            minChunks: 1, // 引入次数，引入次数为 n 可以打包
            maxAsyncRequests: 5, // 异步加载时同时发送的请求数量不能超过5个，超过5个的部分不拆分
            maxInitialRequests: 3,// 页面初始化时同时发送的请求数量最大不能超过3个，超过的3个部分就不拆分
            automaticNameDelimiter: '-', //打包出来的文件名的默认连接符
            //automaticNameMaxLength: 60, // 文件名最长不能超过30个字符
            name: true,  // 拆分的chunk名，true 表示根据模块名和CacheGroup组的key来自动生成，使用上面的连接符
            cacheGroups: { // 缓存配置：一个文件内import多个库，如果需要将多个库打包在一个文件内就要缓存,所以命名为缓存组
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 监测引入的库是否是node_modules下的
                    priority: -10 //权重：决定哪个组优先匹配
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true // 当main.js引入 a.js,b.js, 但是a 中引入了b，就会重复引用，属性为true时就不会重复打包b.js
                }
            }
        },
        minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]
    }
};

module.exports = (env) => {
    if(env && env.production){
        return merge(commConfig, prodConfig)
    }else {
        return merge(commConfig, devConfig)
    }
};

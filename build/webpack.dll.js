const webpack = require("webpack");
const path = require("path");
module.exports = {
    mode: "production",
    entry: {
        vue: ["vue"],
        jquery: ["jquery"]
    },
    output: {
        filename: "[name].dll.js",
        path: path.resolve(__dirname, "../dll"),
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: path.resolve(__dirname, "../dll/[name].mainfest.json"), //生成dll目录下文件的映射文件
        })
    ]
}

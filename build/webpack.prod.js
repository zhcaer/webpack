const path = require("path");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        chunkFilename: "[name].[contenthash].js",
        path: path.resolve(__dirname, '../dist')
    },
    // devtool: "cheap-module-source-map",
    plugins: [
        // new BundleAnalyzerPlugin()  //打包分析
    ]
};

var merge = require("webpack-merge");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var commConfig = require("./webpack-common");
const prodConfig = {
    mode: "production",
    devtool: "cheap-module-source-map",
    plugins: [
        new BundleAnalyzerPlugin()  //打包分析
    ]
};
module.exports = merge(commConfig, prodConfig);

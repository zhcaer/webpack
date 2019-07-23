const path = require("path");
const devConfig = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist/")
    },
    devServer: {
        contentBase: "./main.js",
        port: 3000,
        open: true,
        hot: true,
    },
};
module.exports  = devConfig;

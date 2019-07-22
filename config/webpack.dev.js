var merge = require("webpack-merge");
var commConfig = require("./webpack-common");
const devConfig = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "./main.js",
        port: 3000,
        open: true,
        hot: true,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:3000",
                pathRewruteL: {
                    "^/api": ""
                }
            }
        }
    },
};

module.exports = merge(commConfig, devConfig);

var merge = require("webpack-merge");
var commConfig = require("./webpack-common");
const prodConfig = {
    mode: "production",
    devtool: "cheap-module-source-map"
};
module.exports = merge(commConfig, prodConfig);

1.生成package.json
    npm init -y

2.编译main.js

webpack官网地址:https://webpack.js.org/
github:https://github.com/webpack/webpack
淘宝镜像:https://npm.taobao.org/package/webpack
npm:https://www.npmjs.com/package/webpack
安装插件：
    webpack-cli
    webpack
    npm install -g webpack-cli webpack(全局安装)
    npm install --save-dev webpack-cli webpack
    或者用：yarn add -D webpack-cli webpack
在package.json中加入脚本"dev"
    npm run dev 编译或 webpack src/main.js -o build/build.js --mode "development"
编译后可以打开index.html文件看到控制台有输出了，但IE低版本的浏览器会报错，因为用了es6+的语法

3.ES6转ES5、开启本地服务器、以模板自动生成HTML、自动清除旧编译文件、配置编译文件webpack.config.js
ES6转ES5
    babel-loader
    @babel/core
    @babel/preset-env
自动清除旧编译文件
    clean-webpack-plugin
以模板自动生成HTML
    html-webpack-plugin
开启本地服务器
    webpack-dev-server
写入脚本：
    dev: "webpack-dev-server"(自动用本地服务器打开)
    build: "webpack --config ./webpack.config.js"(指定用webpack.config.js配置文件编译)
可以将ES6转换成ES5，但内置的API如Promise还不能转换

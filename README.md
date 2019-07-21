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
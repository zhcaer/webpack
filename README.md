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

    dev: "webpack-dev-server --config ./webpack.config.js"(自动用本地服务器打开)
    build: "webpack --config ./webpack.config.js"(指定用webpack.config.js配置文件编译)

可以将ES6转换成ES5，但内置的API如Promise还不能转换

4.拆分配置文件、局部垫片

拆分webpack.config.js文件的options为.babelrc文件

局部垫片插件

    @babel/runtime
    @babel/plugin-transform-runtime
    @babel/runtime-corejs2

参考网站:https://babeljs.io/docs/en/babel-plugin-transform-runtime 

局部垫片一般适用开发插件，开发项目时应使用全局垫片@babel/polyfill

5.全局垫片库

    @babel/polyfill
    babel官网:https://babeljs.io/docs/en/babel-polyfill

按需转换配置:

    sueBiltIns:"usage"

可以指定兼容浏览器编译，垫片库是不支持IE8及以下浏览器的

6.编译TS

参考：https://webpack.js.org/guides/typescript/

安装插件：

    typescript
    ts-loader

类型定义:

    @types/lodash

参考:http://microsoft.github.io/TypeSearch/

7.编译图片

插件安装：

    file-loader
    url-loader

两个插件的功能基本一样，url-loader更强大一点

limit的值是限制是否转换成base64

8.编译CSS、SASS、图标

css插件安装:

    css-loader
    style-loader

sass插件安装:

    sass-loader
    node-sass

9.配置拆分、全局变量注入、反向代理

配置拆分：

    安装插件：webpack-merge

全局变量注入:

    第一种方法：
        插件安装：
            expose-loader
    第二种方法：
        使用webpack.ProvidePlugin内置插件

反向代理:

    配置devServer的proxy或者后台用cors插件或配置
    //CORS跨域后台配置
    app.all('*', function(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", "3.2.1");
        res.header("Content-Type", "application/json;charset=utf-8");
        next();

    });

10.代码分割：

代码分割和webpack无关，用来提升性能

1.entry配置多入口

2.动态导入：通过模块的懒加载调用来分离代码

    插件安装:
        @babel/plugin-syntax-dynamic-import
        参考：https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
        .babelrc文件加入"plugins": ["@babel/plugin-syntax-dynamic-import"]

3.防止重复：使用SplitChunksPlugin去重和分离chunk

    插件安装：split-chunks-plugin
    加入optimization配置
    参考:https://webpack.js.org/plugins/split-chunks-plugin/

11.打包分析

    1.脚本加入  --profile --json  生成stats.json，就是我们分析打包流程的文件，对打包过程的一个描述
    2.插件安装：
        参考:https://github.com/webpack-contrib/webpack-bundle-analyzer
        webpack-bundle-plugin(webpack-bundle-analyzer)
    

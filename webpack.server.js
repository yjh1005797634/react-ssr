
/*
  这里是服务器端webpack配置 为什么要target:node环境 ?


 //浏览器端(客户端)
 // require('path');
  因为 比如 引包path的时候 如果是浏览器端则需要将path打包到bundle里面
           而引包到服务器端  打包的时候 是不需要把path打包生成到bundle里面

  所以在打包的过程中 要告诉webpack 打包的文件是服务器端的文件 还是客户端的文件
 */

//服务器端
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const serverConfig = {

    mode:'development',
    target:'node',
    entry:'./src/server/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },

    externals:[nodeExternals()]
}


module.exports = merge(baseConfig,serverConfig);
# react-ssr



一、什么是ssr？
   1.在服务器端渲染html 

二、为什么要ssr 而不用csr？
   1.csr是客户端渲染 客户端渲染有两个很大的弊端 
   2.首屏加载慢 客户端是发送请求 服务端返回一个HTML带div的空壳子 里面没有数据 需要后续慢慢下载js css 下载需要时间 
   3.SEO问题 返回的HTML带div的空壳子 里面没有数据 百度🕷爬虫 爬不到数据 

三、react+ssr具体流程 最基本的跑通流程
   1.nodejs express框架 创建app服务器 开启
   2.浏览器通过localhost:3000访问开启的服务器 服务器直接res.send(‘html’)；
   3.而用到react组件 当res.send时 不能编译jsx语法 所以需要webpack
   4.在服务端渲染 设置webpack.server.js 
   5.设定
     target：node 
     mode：development
     externals:[nodeExternals()],     const nodeExternals = require('webpack-node-externals');
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['react','stage-0',
                    ['env',{
                        targets:{
                            browsers:['last 2 version']
                        }
                    }]
                    ]
                }
            }

        ]
    }


四、为什么要用webpack打包？ 
   1.直接node index.js文件 不通 因为有react的 jsx语法 
   2.需要esModule 模式 es6语法   


五、跑通react + ssr 后 需要 webpack打包 成bundle.js 
   1.webpack —config webpack.server.js  而它的入口文件是 ./src/index.js 
   2.这样 将index.js 打包成 buidl/bundle.js 
   3.最后执行 node build/bundle.js 

六、ReactDOM.render(</App>,document.getElementById(‘root’))
   1.服务端不能拿到document 因为document是浏览器端的属性 
   2.用 import {renderToString} from ‘react-dom/server’
   3.res.send(renderToString(<Home/>))

七、同构？
   1.就是同一套代码在服务器端和浏览器端都执行 
   2.浏览器怎么执行react代码

八、浏览器执行react代码?  同构webpack.client.js 编译jsx es6语法 
   1.在src/client/index.js 里面 执行react代码 
   2.但是直接执行是不行的 因为浏览器不能执行es6 jsx语法 所以必须先webpack编译 
   3.由此 webpack.client.js 文件产生 设置入口文件 src/cilent/index.js 将其打包 入口文件在 public/index.js  
   4.这样 浏览器获取的public/index.js是 发送给服务器 服务器通过webpack.client.js 打包后的bundle.js 所以实际执行的是bundle文件 
   5.这样前后端就跑通了 


 













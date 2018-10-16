/**
 * Created by apple on 18/10/12.
 */

const express = require('express');
const app = express();
// const Home = require('./containers/Home/index.js');
import Home from './containers/Home/index.js';
import ReactDOM from 'react-dom';
import React from 'react';
import {renderToString} from 'react-dom/server';

const content = renderToString(<Home/>);

app.use(express.static('static'));

app.get('/',function (req, res) {

    // res.end(`
    //      <html>
    //       <head>
    //          <meta charset="UTF-8">
    //          <title>Document</title>
    //      </head>
    //      <body>
    //         <h3>在服务aaaaa</h3>
    //      </body>
    //      </html>
    //  `
    // );
    /*
        现在如何将Home组件渲染到浏览器上?

     */
    res.send(`
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
    </head>
    <body>
    
      <div id="root">${content}</div>
      <script src="/csrIndex.js"></script>
    </body>
    </html>
`)




});

var server = app.listen(3009,function () {

    console.log('在3009跑起来');
});

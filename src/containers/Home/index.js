/**
 * Created by apple on 18/10/14.
 */

// const React = require('react');
import React from 'react';

const Home = ()=>{

    return (
        <div>

            <div>同构</div>
            <button onClick={()=>{alert('浏览器端访问')}}>click</button>
        </div>
    )
}

// module.exports = {
//    default:Home
// }

export default Home
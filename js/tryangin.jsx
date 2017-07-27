import React from "react";
import ReactDom from "react-dom"
import { AppContainer } from 'react-hot-loader'

let tryangin = ReactDom.render(
    <div>what a good day 123ddd <ul
    ><li>1komo</li>
        <li>2ccadfxxzdccc</li>
        <li>komoleixxccc3</li></ul></div>,
    document.getElementsByClassName('tryangin')[0]
)
// export default function () {
//     console.log("gg");
// }
if (module.hot) {
  module.hot.accept('./tryangin.jsx', function() {
    // 使用更新过的 library 模块执行某些操作...
// tryangin.log();

    
    console.log("xixiccxi");
  })
}
// export default {
//     log(){
//         alert(22);
//         console.log("log");
//     }
// }

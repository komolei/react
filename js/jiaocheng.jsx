import React, { Component } from "react"
import { render } from 'react-dom';
let click1 = (props) => {
    let click = <div>{new Date().toString()}</div>

    let jiaocheng = document.getElementById('jiaocheng');
   return render(click, jiaocheng);

}
setInterval(click1, 1000);
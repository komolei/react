import React, { component } from "react"
import { render } from "react-dom";
let key = <h1 name="what a bundle bag">i am a key <span> <p>ccc</p>span1p</span>
<span>span2</span></h1>
let name = document.getElementById("name");
render(key, name);

//解析为
// tagname: h1
// attribute: name="what a bundle bag"
// children: (i am a key
//      tagname:span
//       attribute: null 
        // children :( )
// ) 
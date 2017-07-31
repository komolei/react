import React, { component } from "react"
import { render } from "react-dom"
let komo = document.getElementById("komo");
let a = {
    name: "komolei clc",
    sex: "male",
}
let div1 = <div>js in jsx
    <p>what a bad day!</p>
</div>
let div2 = <div>
    xiangjiaopi
    <span>xixi</span>
    <h3 >{a.name}</h3>
</div>
let div3 = ["a", "b", "cc"].map((name) => {
    return <h4>{name}</h4>
})
render(<div>"hello",{div1},{div2}</div>, komo);//可以去掉逗号,
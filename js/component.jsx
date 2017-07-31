import React, { Component } from "react"
import { render } from "react-dom"
// class Komo extends Component {
//     super();
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayName() {
//         console.log(this.name);
//     }
//     getAge() {
//         console.log(this.age);
//     }
// }
// let komo = new Komo("clckomo", 17);
// 上面写错了
let com = document.getElementById("kkk");

class Komo extends Component {
    constructor() {
        super();
        this.state = {
            b: 1,
            sex: 24,
        }
    }
    handle() {
        this.setState({
            b:0,
            sex: 33,
        })
    }
    render() {
        return <div onClick={() => this.handle()}>{this.props.children} component!  hot module  {this.state.b} {this.state.sex}</div>
    }
}

const A = (props) => {
    return <div data-id="data">{props.sex} <h1>{props.name}</h1></div>
}
let sex = "nike"
render(<Komo ><A sex={sex} name="my name"/></Komo>, com);

// const A = (props) => {
//     return <div data-id="data">{props.sex} <h1>{props.name}</h1></div>
// }
// let sex = "xixixccci"
// render(<A name="clc komolei name" sex={sex} />, com)
//error
// A.setProps({
//     name:"hello world"
// })
//error
// render(<A name="clc komolei name" sex="xoxo"/>, com)



// render(<div>{komo.sayName()},"ddd"</div>,com);
// render(<div>"1111"</div>,com);


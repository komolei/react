import React, { Component } from "react"
import { render } from "react-dom"

let a = document.getElementById("a")
let Ka = (props) => {
    // this.props.name = "xxx"; //props不允许修改。修改只有一个入口：setState
    return <div>this is a {props.name} <span>what is a {props.sex}</span></div>
}

let name="funcccc"
// render(<Ka name="xiaojiahuo" sex="famale" />, a)
class K extends Component {
    // super()
    // constructor() {
    //     state: {
    //         name: 'clc'
    //     }
    // };
    constructor() {
        super();
        this.state = {
            name: 'clc',
            age: '24',
            sex: 'male'
        }
    }
    click() {
        this.setState({
            name: 'komo',
            sex: 'female'
        })
    }
    componentDidMount() {
        console.log("DidMount");
    }
    shouldCompoentUpdate() {
        console.log(2);
    }
    componentWillMount() {
        console.log(1);
    }

    render() {
        return (<div onClick={() => this.click()}><p>{this.props.children} ！</p><p>{this.state.name}</p> <p>{this.state.sex}+{this.state.age}</p>
            <Ka name={this.state.name} sex={this.state.sex} />
        </div>)
    }
}
render(<K>fuck the day</K>, a);
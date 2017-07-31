import React, { Component } from 'react'
import { render } from 'react-dom'

let b = document.getElementById('b')
let div1 = <p>see you again</p>
let Q = (props) => {
    return <p>md! {props.name} <span>{props.sex}</span></p>
}
class Qa extends Component {
    constructor() {
        super();
        this.state = {
            name: 'clc',
            sex: 'male'
        }
    }
    click() {
        // this.state = {
        //     name: 'komolei'
        // }
        this.setState({
            name: "komolei g"
        })
    }
    //第二种写法
    click = () => {
        this.setState({
            name: "komolei state"
        })
    }
    componentDidMount() {
        console.log("Did Mount");
    }
    render() {
        // return <div onClick={() => this.click()}>{this.props.children} <span>{this.state.name}</span><Q name={this.state.name} sex={this.state.sex} /></div>
        //第二种写法
        return <div onClick={this.click}>{this.props.children} <span>{this.state.name}</span><Q name={this.state.name} sex={this.state.sex} /></div>
        
    }
}
render(<Qa>fuck zhiting</Qa>, b)
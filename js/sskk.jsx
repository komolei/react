import React, { Component } from 'react'
import { render } from 'react-dom'

let sskk = document.getElementsByClassName("sskk")[0]
let div1 = <div>   i am trying to do something</div>
let S = (props) => {
    return <div>{props.name} {props.age}</div>
}
class Sa extends Component {
    constructor() {
        super();
        this.state = {
            name: 'clc',
            age: '17',
            sex: 'male'
        }
        //error this.click() = this.click().bind(this);
        this.click = this.click.bind(this)

    }
    // click=()=>{} error
    // click = () => {
    //     return (
    //         this.setState({
    //             sex: "female"
    //         })
    //     )
    // }
    click() {
        this.setState({
            name: "xiaojiahuo",
            sex: 'female'
        })
    }
    render() {
        return <div onClick={this.click}><S name="komolei" age="24" /><p>the name will change:{this.state.name}</p>{div1} <p>sex will change: {this.state.sex}</p></div>

    }
}
render(<Sa />, sskk);
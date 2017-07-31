import React, { Component } from "react"
import { render } from "react-dom"


// let TodoInput = (props) => {
//     return <input type="text" value="komolei" onChange={}>{props.value}</input>
// }
class Todo extends Component {
    constructor() {
        super();
        this.state = {
            value: "ccl"
        }
        this.click = this.click.bind(this)
    }

    click(event) {
        this.setState({
            value: event.target.value,
        })
        console.log("click")
    }
    render() {
        return <div>
            <h1>代办事项</h1>
             <div><input type="text" placeholder="请输入" onChange={this.click} /> <input type="button" /></div> 
            {/* value:<TodoInput /> */}
            <div>
                <ul>
                    <li>{this.state.value}</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    }
}
let todo = document.getElementById("todo");
// render(<Todo />, todo)


   
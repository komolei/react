import React, { Component } from "react"
import { render } from "react-dom"

import TodoInput from "./TodoInput.jsx"
// import TodoItem from "./TodoItem.jsx"

// let TodoInput = (props) => {
//     return <input type="text" value="komolei" onChange={}>{props.value}</input>
// }
// class TodoInput extends Component {
//     constructor(props) {
//         super(props);
//         this.click = this.click.bind(this);
//         this.state = {
//             value: ''
//         }
//     }
//     click(event) {
//         this.setState({
//             value: event.target.value,
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" placeholder="请输入" onChange={this.click} value={this.state.value} />
//                 <span>output: {this.state.value}</span>
//                 <input type="button"/>
//             </div>
//         );
//     }
// }
class Todo extends Component {
    constructor() {
        super();
        this.state = {
            // value: "ccl"

            todoInput: '',
            todoList: [
                { id: 0, title: " eat", status: ' completed', delete: ' false' },
                { id: 1, title: " play", status: ' parsed', delete: ' true' }
            ]

        }

    }
    change = () => {

    }
    click = (e) => {
        this.setState({
            todoInput: e.target.value,
            // todoList: newTodoList,
        })
        console.log(this.state.todoInput);

    }
    addTodoList = () => {
        // let newTodoList = this.state.todoList.unshift(this.state.todoInput);
        let newTodoList = this.state.todoList;
        // let newTodoList = 1;
        // console.log(this.state.todoInput);

        this.setState({
            todoList: newTodoList
        })
    }
    // componentDidMount() {
    //     console.log(this.addTodoList(), "gg");
    // }
    render() {
        // let todoList = this.state.todoList;
        // let todoInput = this.state.todoInput;
        return <div>
            <h1>代办事项</h1>
            {/* value:<TodoInput /> */}
            <div>
                <div>
                    {/* <input type="text" placeholder="请输入" onChange={this.click} value={todoInput} />
                    <span>output: {todoInput}</span> */}
                    {/* <input type="button" /> */}

                    {/* 变成了props的todoInput */}
                    <TodoInput komo={this.state.todoInput} onclick={this.click} />
                    <span>{this.state.todoInput}</span>
                </div>
                {/* <ul>
                    {todoList.map((item) => {
                   return <li key={item.id}>{Object.values(item)}</li> 
                        return <li key={item.id}>{item.id}</li>
                    })}
                </ul> */}
                {/* <TodoItem todoItem={this.state.todoList} /> */}
            </div>
        </div>
    }
}

let todo = document.getElementById("todo");
render(<Todo />, todo)



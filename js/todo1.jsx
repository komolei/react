import React, { Component } from "react"
import { render } from "react-dom"

let TodoInfo = {
    "TodoInput": "",
    "TodoList": [
        { "id": "0", "title": "eat", "status": "completed", "delete": "false" },
        { "id": "1", "title": "play", "status": "completed", "delete": "false" },
        { "id": "2", "title": "watch", "status": "completed", "delete": "false" },

    ]
}
class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.TodoListInfo.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        )
    }
}
class TodoInput extends Component {

    keyUp = (e) => {
        console.log(1111);
        if (e.key == 'Enter') {
            console.log("key =13s")
        }
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="input something" value={this.props.TodoInputInfo} onKeyPress={this.keyUp} />
                <span>
                    输入：{JSON.stringify(this.props.TodoInputInfo)}
                </span>
            </div>
        )
    }
}
class Todo extends Component {
    constructor() {
        super();
        this.state = {
            TodoInfo: {
                "TodoInput": "",
                "TodoList": [
                    { "id": "0", "title": "eat", "status": "completed", "delete": "false" },
                    { "id": "1", "title": "play", "status": "completed", "delete": "false" },
                    { "id": "2", "title": "watch", "status": "completed", "delete": "false" },

                ]
            }
        }

    }
    click = (e) => {
        // e.preventDefault();
        console.log("fuck 13")
        this.setState({
            TodoInputInfo: e.target.value,
        })
    }
    render() {
        return (
            <div>
                <h1>代办事项</h1>
                <TodoInput TodoInputInfo={this.props.newTodoInfo.TodoInput} addClick={this.click} />
                <TodoList TodoListInfo={this.props.newTodoInfo.TodoList} />
                {/* {JSON.stringify(this.props.newTodoInfo)} */}
            </div>
        );
    }
}
let todo = document.getElementById("todo");
render(<Todo newTodoInfo={TodoInfo} />, todo)



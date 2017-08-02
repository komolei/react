import React, { Component } from 'react'
import { render } from 'react-dom'

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todoInput: '',
            todoList: '',
        }
    }
    handle = (e) => {
        this.setState({
            todoInput: e.target.value
        })
    }
    render() {
        <div>
            <input type="text" value={this.state.todoInput} onChange={this.handle.todoInput} />
        </div>
    }
}
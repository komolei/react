import React, { Component } from "react"
import { render } from "react-dom"
export default class TodoInput extends Component {
    render() {
        return <input type="text" value={this.props.todoInput} onChange={this.props.onclick} />
    }
}
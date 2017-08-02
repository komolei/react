import React, { Component } from "react"
import { render } from "react-dom"
export default class TodoItem extends Component {
    render() {
        return <ul>
           {this.props.TodoItem}
        </ul>
    }
}
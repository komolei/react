import React, { Component } from 'react';
import { Todo } from '../actions';
class TodoList extends Component {
    delete = (e, todoList, key) => {
        this.props.onDelete(e, todoList, key);
    }
    render() {
        const { TodoList, content, todoList, sure, changeCompleted, onDelete } = this.props;
        // todoList === undefined ? console.log("gg") : item;
        console.log("new content", this.todoList1);
        let item = todoList.map((item, index) => {
            return (
                <li key={index}>
                    <span>{item.title}</span>
                    <span> </span>
                    <span>{item.status}</span>
                    <input type="checkbox" checked={item.status === 'completed'} onChange={(e) => {
                        {/* console.log(e.target.checked); */ }
                        if (item.status === 'completed') {
                            item.status = 'uncompleted';
                            {/* changeCompleted(item.status); */ }
                        }
                        else {
                            item.status = 'completed'
                            {/* this.props.changeCompleted(item.status); */ }
                        }
                    }} />
                    {console.log(todoList.indexOf(item))}
                    <button onClick={(event) => {
                        {/* let index = todoList.indexOf(item);
                        console.log("index is:", index); */}
                        this.delete(event, todoList, index);
                        console.log("index", index);
                        {/* let index = todoList.indexOf(item);
                        todoList.splice(index, 1); */}
                    }} key={index} >删除</button>
                </li>
            )
        })
        return (
            <ul>{item}</ul>
        )

    }

}
export default TodoList;
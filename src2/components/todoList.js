import React, { Component } from 'react';
import { Todo } from '../actions';
class TodoList extends Component {
    delete = (e, todoList, key) => {
        // return todoList.splice(key, 1);
        // console.log("key",key);
        // console.log("ggx");
        // this.props.todoList.splice(key, 1);
        console.log("key is:", key);
        debugger;
        // todoList = todoList.splice(key, 1);

        console.log("todoListdfadafad is what:", todoList);
        this.props.onDelete(e, todoList, key);
        // debugger;
    }
    render() {
        this.props.todoList.push(this.props.content);
        const { TodoList, content, todoList, sure, changeCompleted, onDelete } = this.props;
        // console.log("todoList", content);
        // console.log("content:", this.props);
        // debugger; 
        // sure(content);
        console.log("todoList is :", todoList);;
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
                    {/* {console.log(item)} */}
                    <button onClick={(event) => {
                        this.delete(event, todoList, todoList.indexOf(item));
                        console.log(todoList.indexOf(item), "index");
                        {/* let index = todoList.indexOf(item);
                        todoList.splice(index, 1); */}
                    }} key={item.id}>删除</button>
                </li>
            )
        })
        return (
            <ul>{item}</ul>
        )

    }
}
export default TodoList;
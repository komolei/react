import React, { Component } from "react";
import { render } from 'react-dom';
import { FaUser, FaKey, FaHandPaperO, FaFileTextO, FaFileO } from 'react-icons/fa'

class newTodo extends Component {
    sureTodo = (e, index, list) => {
        let val = this.node.value.trim();
        if (e.key === "Enter") {
            console.log("list:", val, "this.props.todoList", this.props);
            this.props.sure(val);
            this.node.value = '';
            // return index, list;
        }

    };
    deleted = (e, index, todoList) => {
        console.log("delete index:", index);
        // let todoList=this.props.todoList;
        // let todoList1=todoList;
        // let newTodoList = todoList1.splice(index, 1);
        todoList.splice(index, 1);
        this.props.onDeleted(todoList);
        // console.log("new store:", this.props.todoList,"newTodoList:",newTodoList)
        console.log("new store", this.props.todoList);
    }
    change=(e,index)=>{
        this.props.onStatus(index);
    }
    render() {
        const { todoList } = this.props;
        // const todoList = this.props.todoList;
        console.log("new todoList:",todoList);
        localStorage.setItem('todo',JSON.stringify(todoList));    
        return (
            <div>
                <label htmlFor="todoInput"><FaFileTextO/> </label>
                <input type="text" placeholder="please input Todo" onKeyPress={(e) => { this.sureTodo(e) }} ref={input => this.node = input} />
                <ul>
                    {todoList.map((item, index) => {
                        return <li key={index}><FaFileO/><span>{item.title} </span><span>{item.status} <input type="checkbox" checked={item.status === "completed"} onChange={(e)=>{this.change(e,index)}} /> </span>
                            <button onClick={(e) => { this.deleted(e, index, todoList) }}>del</button></li>
                    })}
                </ul>
            </div>
        )
    }
}
export default newTodo;
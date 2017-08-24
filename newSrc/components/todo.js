import React, { Component } from 'react'
import { render } from 'react-dom'
// import * as leanstorage from './leancloud.js'
import { FaUser, FaKey, FaHandPaperO, FaFileTextO, FaFileO } from 'react-icons/fa'

// const newTodo = document.getElementById('newTodo');
const newTodo = document.getElementById('dialog');
class TodoInput extends Component {
    onchange1 = (e) => {
        let value = e.target.value;
        this.props.onchange(value);
    }
    keyUp = (e) => {
        if (e.key === 'Enter') {
            this.props.onkey(e.target.value);
        }
    }
    render() {
        return (
            <div>
                <label htmlFor="inputText"><FaFileTextO /></label>
                <input type="text" id="inputText" value={this.props.todoInput} onKeyPress={this.keyUp} onChange={this.onchange1} placeholder="please input your things" />
                {/* <span>{this.props.todoInput}</span> */}
            </div>
        )
    }
}

class TodoList extends Component {
    changeCompleted = (e) => {
        this.setState({
            checked: e,
        })
    };
    delete = (e, key) => {
        console.log("e", e);
        console.log("this key:", key);
        this.props.onDelete(e, key);
    }
    render() {
        let items = this.props.todoList;
        let item = items.map((item, index) => {
            return (
                <li key={index} ref="li" className="li">
                    <label><FaFileO /></label>
                    <span> {item.title}</span>
                    <span> {item.status}</span>
                    <input type="checkbox" checked={item.status === 'completed'} onChange={(e) => {
                        console.log(e.target.checked);
                        if (item.status === 'completed') {
                            console.log("ssss");
                            item.status = 'uncompleted';
                            this.changeCompleted(item.status);
                        }
                        else {
                            item.status = 'completed'
                            this.changeCompleted(item.status);

                        }
                    }} />
                    <button onClick={() => { this.delete(event, items.indexOf(item)) }} key={item.id}>删除</button>
                </li>
            )
        })
        return (
            <ul>{item}</ul>
        )
    }
}
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoInput: '',
            todoList: this.props.value || [{ id: 0, title: 'eat', status: 'uncompleted', delete: 'false' },]
        }
    }
    change = (input) => {
        // this.store();
        this.setState({
            todoInput: input,
        })
    };
    key = (input) => {
        let length = this.state.todoList.length + 1;
        let newtodoInput = { id: length, title: input, status: "uncompleted", delete: 'false' };
        let todoList1 = (this.state.todoList.push(newtodoInput));
        this.setState({
            todoInput: '',
            todoList: this.state.todoList
        });
        this.store();
    }
    completed = (e, todo) => {
        todo.status = todo.status === 'completed' ? 'completed' : 'uncompleted';
        this.setState(this.state)
        return;
    }
    delete = (e, key) => {
        this.state.todoList.splice(key, 1)
        this.setState({
            todoList: this.state.todoList
        })
        this.store();
    };
    store = () => {
        let todoList = this.state.todoList;
        localStorage.setItem("todo", JSON.stringify(todoList));
    };
    render() {
        return (
            <div id="todo">
                <h1>代办事项</h1>
                <TodoInput todoInput={this.state.todoInput} onchange={this.change} onkey={this.key} />
                <TodoList todoList={this.state.todoList} onCompleted={this.completed} todoInput={this.state.todoInput} onDelete={this.delete} />
            </div>
        )
    }
}
// window.onload = () => {
//     let todo = JSON.parse(localStorage.getItem('todo'));
//     render(
//         <Todo value={todo} />, newTodo);
// }
export default Todo;
// export default a=1;
// exports=App;//error 导出为object
// export default {App};//error 导出为object
// export default <App /> ;//error 导出为object
// exports=App;
//下面的正确right
// module.exports = Todo; //module export 模块的导出 ，试过使用export default并不可以。gg。
//看了报错，是没有模块导出，很奇怪，为什么export 不能模块导出。

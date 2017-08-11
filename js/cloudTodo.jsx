import React, { Component } from 'react'
import { render } from 'react-dom'
// import PropTypes from 'prop-types' 没有感觉到用处。等下次要用到再说吧
import * as leanstorage from './leancloud.js'
// import BasicExample from './reactRouter.jsx'

// console.log(leanstorage,"leanCloud");

//  // 声明一个 Todo 类型
//   var Todo = AV.Object.extend('Todo');
//   // 新建一个 Todo 对象
//   var todo = new Todo();
//   todo.set('title', '工程师周会');
//   todo.set('content', '每周工程师会议，周一下午2点');
//   todo.save().then(function (todo) {
//     // 成功保存之后，执行其他逻辑.
//     console.log('New object created with objectId: ' + todo.id);
//   }, function (error) {
//     // 异常处理
//     console.error('Failed to create new object, with error message: ' + error.message);
//   });

const newTodo = document.getElementById('newTodo');
class TodoInput extends Component {
    onchange1 = (e) => {
        let value = e.target.value;
        this.props.onchange(value);
    }
    keyUp = (e) => {
        if (e.key === 'Enter') {
            // console.log("i am Enter");
            this.props.onkey(e.target.value);
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.todoInput} onKeyPress={this.keyUp} onChange={this.onchange1} placeholder="please input your things" />
                <span>{this.props.todoInput}</span>
            </div>
        )
    }
}
// TodoInput.PropTypes = {
//     value: PropTypes.string.isRequired,
// }
class TodoList extends Component {

    changeCompleted = (e) => {
        // item.status = 'completed'
        // let check = e;
        // check = false;
        console.log(11);
        console.log("e item:", e);
        // console.log("object:", this.props.todoInput);
        // console.log("this", item);

        this.setState({
            checked: e,
        })
        // this.props.onCompleted(check, this.props.todoList);
        // console.log(key,"key")
        // this.props.todoList.status = e.target.value;
        // this.setState({
        //     todoList: todoList
        // })
        // this.setState({})
        // console.log("this.refs.input", this.refs.input);
        // this.refs.input.focus();
    };
    // onDelete = (e) => {
    //     let checked = e.target.checked;
    //     console.log(checked, "ggix");
    //     // this.onDelete(e);

    // }
    delete = (e, key) => {
        // let li = this.refs.li;
        // console.log(li, "li");
        // this.setState({
        //     delete: e
        // })
        console.log("e", e);
        console.log("this key:", key);
        this.props.onDelete(e, key);

    }
    render() {
        let items = this.props.todoList;
        // console.log(items, "item");
        // console.log("object11", this.props.todoInput);

        let item = items.map((item, index) => {
            // if (item.delete === 'true') {
            //     delete items[item.id]
            // }
            return (
                <li key={index} ref="li" className="li">
                    {/* <input type="checkbox" checked={item.status === 'completed'} onChange={this.changeCompleted} key={item.id} ref="input" /> */}
                    {/* <input type="checkbox" checked={item.status === 'completed'} onChange={()=>{item.status === 'completed' ? 'completed' : 'uncompleted';console.log(item.status);}} /> */}
                    <input type="checkbox" checked={item.status === 'completed'} onChange={(e) => {
                        console.log(e.target.checked);
                        if (item.status === 'completed') {
                            console.log("ssss");
                            {/* e.target.checked = true; */ }
                            item.status = 'uncompleted';
                            {/* item.delete = 'false'; */ }
                            {/* 这种方式并不是真正的改变checked的值 */ }
                            this.changeCompleted(item.status);
                        }
                        else {
                            {/* e.target.checked = false; */ }
                            item.status = 'completed'
                            {/* item.delete = 'true'; */ }
                            this.changeCompleted(item.status);

                        }
                    }} />
                    <span> {item.title}</span>
                    <span> {item.status}</span>
                    {/* <span> {item.delete}</span> */}
                    {/* <input type="checkbox" checked={item.delete === 'true'} onChange={
                        (e) => {
                            if (item.delete == 'true') {
                                console.log(item.id);
                                this.delete();
                            }
                            else {
                                item.delete = 'true'
                                this.delete(item.delete);
                            }
                        }
                    } /> */}
                    <button onClick={() => { this.delete(event, items.indexOf(item)) }} key={item.id}>删除</button>
                </li>
            )
        })
        // console.log(item, "bigitem");
        return (
            <ul>{item}</ul>
        )

    }
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoInput: '',
            todoList: this.props.value || [{ id: 0, title: 'eat', status: 'uncompleted', delete: 'false' },]
            // todoList: [
            //     
            //     { id: 2, title: 'play', status: 'completed', delete: 'true' },
            //     { id: 3, title: 'play', status: 'uncompleted', delete: 'false' },
            //     // { "id": "0", "title": "eat", "status": "completed", "delete": "false" },
            //     // { "id": "1", "title": "play", "status": "completed", "delete": "false" },
            //     // { "id": "2", "title": "watch", "status": "completed", "delete": "false" },
            // ]
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
        console.log(length);
        // console.log("input:", input);
        // console.log(this.state.todoList);
        let newtodoInput = { id: length, title: input, status: "uncompleted", delete: 'false' };
        console.log(newtodoInput, "newTodoInput");
        let todoList1 = (this.state.todoList.push(newtodoInput));
        console.log(this.state.todoList, "todoList");
        // let todoList2 = this.state.todoList;
        // console.log("todoList1:", todoList1, "todoList2:", todoList2);
        // // 为什么todoList1和todoList2会不一样，因为push()会返回length ,mmp哟
        // console.log("this.state.todoList", this.state.todoList);
        this.setState({
            todoInput: '',
            todoList: this.state.todoList
        });
        // let todoList3 = this.state.todoList;
        // console.log("todoList3:", todoList3.concat({ title: input }))
        // this.setState({
        //     todoInput: '',
        //     todoList: todoList3.concat({ title: input })
        // })
        // this.setState(preState => ({
        //     todoInput: '',
        //     todoList: preState.todoList.concat({ id: length , title: input, status: "uncompleted", delete: 'false' })
        // }))
        this.store();


    }
    completed = (e, todo) => {
        console.log(todo, "todo");
        console.log(todo.status, "todo.status");
        todo.status = todo.status === 'completed' ? 'completed' : 'uncompleted';
        this.setState(this.state)
        return;
        // this.setState({

        //     checked: e,

        // })
        // console.log(
        //     this.state.todoInput,"todo"
        // );
    }
    delete = (e, key) => {
        // console.log("eeekey:", key);
        // let x=this.state.todoList.slice(key, 1)
        // let x = this.state.todoList.filter((item) => {
        //     return item.delete == 'false'
        // })
        // let index =
        // delete this.state.todoList[key - 1]

        this.state.todoList.splice(key, 1)
        // this.state.todoList.map((item)=>{
        //     item.id
        // })
        // key === 0 ?  : this.state.todoList.splice(key, 1)

        // delete this.props.value[key - 1]
        console.log(this.state.todoList);
        //终于写出来了。log大法好啊
        // this.props.value = this.state.todoList;
        // console.log(x, "x");
        this.setState({
            todoList: this.state.todoList
        })
        this.store();

    };
    store = () => {
        let todoList = this.state.todoList;
        // todoList.map((item) => {
        //     console.log(item, "item");
        //     console.log(JSON.stringify(item));
        //     // let item1 = item;
        //     // console.log(
        //     //     Object.keys(item).join(','),Object.values(item).join(',')

        //     // );

        //     // for (var key in item) {
        //     //     if (item.hasOwnProperty(key)) {
        //     //         var element = item[key];
        //     //         console.log("element:", element);
        //     //     }
        //     // }
        // })
        localStorage.setItem("todo", JSON.stringify(todoList));
        // console.log(JSON.stringify(todoList));
    };
    // componentDidMount() {
    //     this.store();
    // }
    render() {
        return (
            <div>
                <h1>代dd办事项</h1>
                <TodoInput todoInput={this.state.todoInput} onchange={this.change} onkey={this.key} />
                <TodoList todoList={this.state.todoList} onCompleted={this.completed} todoInput={this.state.todoInput} onDelete={this.delete} />
            </div>
        )
    }
}
window.onload = () => {
    let todo = JSON.parse(localStorage.getItem('todo'));
    // console.log(todo, "todo");
    render(
        <App value={todo} />, newTodo);
}

// export default a=1;
// exports=App;//error 导出为object
// export default {App};//error 导出为object
// export default <App /> ;//error 导出为object
// exports=App;
//下面的正确right
// module.exports = App; //module export 模块的导出 ，试过使用export default并不可以。gg。
//看了报错，是没有模块导出，很奇怪，为什么export 不能模块导出。

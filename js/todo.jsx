import React, { Component } from 'react'
import { render } from 'react-dom'

// let app=document.getSelection("#app");
let app = document.getElementById("app");
// class TodoInput extends Component {
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     name: 'app',
//         //     value: '',
//         // }
//     }
//     // click = () => {
//     //     let value = this.refs.myTextInput.value;
//     //     console.log(value)

//     // }
//     handleChange = (event) => {
//         this.setState({
//             value: event.target.value.toUpperCase()
//         })
//     }
//     render() {
//         return <div>
//             <p>name：{this.state.value}</p>
//             {/* <input type="text" placeholder="输入代办事项" id="input" ref="myTextInput" value={this.state.value} onChange={this.handleChange} /> */}
//             <input type="text" placeholder="输入代办事项" id="input" value={this.state.value} onChange={this.handleChange} />

//             {/* <input type="button" onClick={this.click} />  */}
//             <input type="button" />

//         </div>
//     }
//     // componentDidMount(props) {
//     //     console.log(this.props);
//     //     console.log("/n\n");
//     // }
//     // componentWillReceiveProps(nextProps) {
//     //     console.log("app:", nextProps);
//     //     this.setState({
//     //         value: "clclkdjkaflj"
//     //     })
//     // }

//     // componentDidMount() {
//     //     console.log("mount success")
//     //     this.setState({
//     //         name: 'clc'
//     //     })
//     // }
// }

// let TodoInput = (props) => {
//     return <div><input type="text" /></div>
// }

class TodoInput extends Component {
    constructor() {
        super();

    }
    // handle = (e) => {
    //     // this.setState({
    //     //     newtodo: {
    //     //         id: 22, title: "sleep", status: "uncompleted", delete: "true"
    //     //     }
    //     // })
    //     // this.props.onHandleNewTodo(e.target.value);

    // }
    // click = (e) => {
    //     e.preventDefault();
    //     alert("fuck click")
    //     if (e.keyCode == 13) {
    //         console.log("enter")
    //     }

    // }
    keyUp = (e) => {
        console.log(1111);
        if (e.key == 'Enter') {
            console.log("key =13s")
            let value = e.target.value;
            console.log(value, "value");
            // this.setState({
            //     newTodo: value,
            // })
            // this.props.newTodo=value;

        }
    }
    render() {
        const onNewTodo = this.props.onNewTodo;
        // console.log(onNewTodo,"newTodo");
        return (
            <div>
                {/* <input type="text" value={onNewTodo} onChange={this.props.onHandleNewTodo} />   */}
                {/* <input type="text" value={onNewTodo} onKeyPress={this.props.onHandleNewTodo} /> */}
                <input type="text" value={onNewTodo} onKeyPress={this.keyUp} onChange={this.props.onHandleNewTodo} />

                <span>{onNewTodo}</span>
                {/* <input type="button" onClick={this.click} /> */}
            </div>
        )
    }
}
class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const value = this.state.value;
        let onNewTodoList = this.props.onNewTodoList;
        let onNewTodo = this.props.onNewTodo;
        // newTodoList = newTodoList.unshift(JSON.parse(newTodo));
        let length = JSON.stringify(onNewTodoList).length;
        // let stringNewTodo = ',{"id":"' + onNewTodo + '"}';
        // let ObnewTodoInput=onNewTodo.id
        // console.log(stringNewTodo, "string");
        // console.log((JSON.stringify(onNewTodoList).substr(1, length - 2)) + stringNewTodo);
        // onNewTodoList = JSON.parse('[' + (JSON.stringify(onNewTodoList).substr(1, length - 2) + stringNewTodo) + ']');
        onNewTodoList = onNewTodoList.push({
            id: onNewTodo
        })
        // console.log(onNewTodo);
        //上面方法有错误，不能使用字符串的形式。不然都叠加到一起了。
        console.log(onNewTodoList, "newTodoList");
        return (
            <ul>
                {/* {onNewTodoList.map((item) => {
                    return <li key={item.id}>
                        <p ><span>{item.id}</span> <span>{item.title}</span> <span>{item.status}</span> <span>{item.delete}</span></p>
                    </li>
                })} */}
            </ul>);
    }
}

class App extends Component {
    // let h=<h1>我的代办</h1>
    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
            TodoList: [
                { "id": "0", "title": "eat", "status": "completed", "delete": "false" },
                // { id: 1, title: "watch", status: "completed", delete: "false" },
                // { id: 2, title: "play", status: "completed", delete: "true" },
            ]
        }
    };
    // keyUp = (e, state) => {
    //     (e.keyCode == 13) ? {
    //         newTodo: e.target.value,
    //     } : { newTodo: "this.state.newTodo" }
    // }
    handleNewTodo = (e) => {
        this.setState({
            newTodo: e.target.value,
        })
        // if (e.key === 'Enter') {
        //     this.setState({
        //         newTodo: e.target.value,
        //     })
        // }

    }

    render() {
        // const value = this.state.value;
        // const newTodo = this.state.newtodo;
        return <div><h1>我的待办事项</h1>
            <TodoInput onHandleNewTodo={this.handleNewTodo} onNewTodo={this.state.newTodo} />
            {/* 上面这句话会抽离出{onHandleNewTodo:'',newTodo:''}作为props对象。 */}
            {/* <span>{this.state.newTodo}</span> */}
            <TodoList onNewTodoList={this.state.TodoList} onNewTodo={this.state.newTodo} />
        </div>
        // console.log(props);
    }
}
render(<App />, app)

// 一般setState在这几个钩子忠使用
// componentWillMount
// componentDidMount
// componentWillReceiveProps
// componentDidUpdate



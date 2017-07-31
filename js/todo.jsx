import React, { Component } from 'react'
import { render } from 'react-dom'

// let app=document.getSelection("#app");
let app = document.getElementById("app");
class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'app',
            value: '',
        }
    }
    click = () => {
        let value = this.refs.myTextInput.value;
        console.log(value)

    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value.toUpperCase()
        })
    }
    render() {
        return <div>
            <p>name：{this.state.value}</p>
            <input type="text" placeholder="输入代办事项" id="input" ref="myTextInput" value={this.state.value} onChange={this.handleChange} />
            {/* <input type="button" onClick={this.click} />  */}
            <input type="button" />

        </div>
    }
    componentDidMount(props) {
        console.log(this.props);
        console.log("/n\n");
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log("app:", nextProps);
    //     this.setState({
    //         value: "clclkdjkaflj"
    //     })
    // }

    // componentDidMount() {
    //     console.log("mount success")
    //     this.setState({
    //         name: 'clc'
    //     })
    // }
}
class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            // first: "eat",
            // second: "watch",
            // third: "play",
            value: [
                { id: 0, title: "eat", status: "completed", delete: "false" }
            ]
        }
    }
    render() {
        return <ul>
            {this.state.value.map((item,index) => {
                return <li>{item.title}</li>
            })}
        </ul>
        // return <ul>
        //     <li>{this.state.value}</li>
        // </ul>
    }
    // handle = () => {
    //     this.setState({
    //         value: event.target.value,
    //     })
    // }
    // componentWillMount() {
    //     this.setState({
    //         first: "compontWillMount"
    //     })
    //     console.log("compontWillMount,wo")
    // }
    // componentDidMount() {
    //     // console.log(value,"gg");
    //     this.setState({
    //         first: "componentDidMount"
    //     })
    // }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         first: "componentWillReceiveProps"
    //     })
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     // this.setState({
    //     //     first: "shouleComponentUpdate"
    //     // })
    //     return true;
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     // this.setState({
    //     //     first:"componentDidUpdates"
    //     // })

    // }
    // render() {
    //     // return this.state.map(() => {
    //     //     return <li>{this.state}</li>
    //     // })
    //     // value = this.state.value;

    //     return <ul >
    //         <li>{this.state.first}</li>
    //         <li>{this.state.second}</li>
    //         <li>{this.state.third}</li>
    //     </ul>
    // }
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps, "nextProps");
    //     this.setState({
    //         first:"sdfafaklfirst"
    //     })
    // }
}
class App extends Component {
    // let h=<h1>我的代办</h1>
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }
    render() {
        return <div><h1>我的待办事项</h1>
            <TodoInput />
            <TodoList />
        </div>
    }

}
render(<App />, app)

// 一般setState在这几个钩子忠使用
// componentWillMount
// componentDidMount
// componentWillReceiveProps
// componentDidUpdate
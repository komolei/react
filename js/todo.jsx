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
    render() {
        const newTodo = this.props.newTodo;
        return (
            <div>
                <input type="text" value={newTodo} onChange={this.props.onHandleNewTodo} />
                <span>{newTodo}</span>
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
        const  newTodoList= this.props.newTodoList;
        return (
            <ul>
                {newTodoList.map((item) => {
                    return <li key={item.id}>
                        <p >{item.title} <span>{item.status}</span> <span>{item.delete}</span></p>
                    </li>
                })}
            </ul>);
    }
}
// let addNewTodo = (newTodo,value) => {
//     return value.unshift(newTodo)
// }
class App extends Component {
    // let h=<h1>我的代办</h1>
    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
            TodoList: [
                { id: 0, title: "eat", status: "completed", delete: "false" },
                { id: 1, title: "watch", status: "completed", delete: "false" },
                { id: 2, title: "play", status: "completed", delete: "true" },
            ]
        }
    };

    handleNewTodo = (e) => {
        this.setState({
            // newTodo: { id: 22, title: "play", status: "completed", delete: "true" },
            newTodo: e.target.value,
            // newTodo: addNewTodo,
            // value: newTodoList
        })
    }
    render() {
        const value = this.state.value;
        const newTodo = this.state.newtodo;
        // addNewTodo(newTodo,value);
        return <div><h1>我的待办事项</h1>
            <TodoInput onHandleNewTodo={this.handleNewTodo} newTodo={this.state.newTodo} />
            {/* 上面这句话会抽离出{onHandleNewTodo:'',newTodo:''}作为props对象。 */}
            {/* <span>{this.state.newTodo}</span> */}
              <TodoList newTodoList={this.state.TodoList} />  
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


// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, kconvert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />

//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );

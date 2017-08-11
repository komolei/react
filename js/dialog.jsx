import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import AV from "leancloud-storage"
const appId = 'I2nC3Aehn27s6djgSaO3FlA1-gzGzoHsz';
const appKey = 'DBgHHwHFs0j7E26IErHT1TUc';
AV.init({ appId, appKey });

const user = new AV.User();

// import * as leanCloud from './leancloud.js'
// import "font-awesome-compass";
// let Fa=require('react-fontawsesome') 

//redux
// const count=(state,action)=>{

// }
// let redux = require('redux');
// console.log("redux", redux);
let reducer = (preState, action) => {

    return Object.assign(preState, action);
}
let store = createStore(reducer, { a: 1 });

console.log('====================================');
console.log(store,"store");
console.log('====================================');

// export const count = (state = 1, action) => {
//     switch (action.type) {
//         case 'in':
//             return state + 1;
//         case 'de':
//             return state - 1;
//         default:
//             return state;
//     }
// };
// let store = createStore(count);
// // store.subscrib((state)=>{
// //     console.log(state);
// // })
// store.subscribe(() => {
//     console.log(store.getState());
// })
// store.dispatch({ type: 'in' })
// store.dispatch({ type: 'de' })


//redux
class Login extends Component {
    change = (e) => {
        let val = e.target.value;
        this.props.onKeyName(val);
    }
    sure = (e) => {
        let val = e.target.value;
        if (e.key === 'Enter') {
            // alert("keypress success")
            this.props.onKeyLogin(val);
        }
        else {
            console.log("gg");
        }
    }
    render() {
        return (
            <div>
                <label htmlFor="username">Name</label>
                <input type="username" value={this.props.onName} onChange={this.change} />
                <label htmlFor="password">Password</label>
                <input type="password" value={this.props.onPassword} onKeyPress={this.sure} />
            </div>
        )
    }
}
class SignUp extends Component {
    changeName = (e) => {
        let val = e.target.value;
        this.props.onKeyName(val);
        // console.log("user", user);
    }
    changePassword = (e) => {
        let val = e.target.value;
        this.props.onKeyPassword(val);
        // console.log(val,"vall");
    }
    changePassword = (e) => {
        let val = e.target.value;
        this.props.onKeyPassword(val);
        // val.length>6?this.props.onKeyPassword(val):alert("this password should be greater than 6-digit")

    }
    surePassword = (e) => {
        let val = e.target.value;
        // let surePassword = this.props.surepassword;//error val才是值
        let onPassword = this.props.onPassword;
        console.log("password", onPassword, "val", val, );
        if (e.key === 'Enter') {
            if (val === onPassword) {
                this.props.onKeySurePassword(val);
                alert("Sign Up success ")
            }
            else {
                alert("前后密码不一致")
            }
        }
    }
    render() {
        return (
            <div>
                <label htmlFor="username">Name</label>
                <input id="username" type="text" defaultValue={this.props.onName} onChange={this.changeName} />
                <p>{this.props.onName}</p>
                <label htmlFor="password">Password</label>
                {/* <input id="password" type="password" defaultValue={this.props.onPassword} onKeyPress={this.surePassword} onChange={this.changePassword} /> */}
                <input id="password" type="password" defaultValue={this.props.onPassword} onChange={this.changePassword} />
                <label htmlFor="surepassword">sure your password</label>
                <input id="surepassword" type="password" defaultValue={this.props.onSurePassword} onKeyPress={this.surePassword} />
            </div>
        )
    }
}

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            name: '',
            password: '',
            surepassword: '',
        }
    }
    keyName = (val) => {
        this.setState({
            name: val,
        })
        console.log(this.state.name);
    }
    keyPassword = (val) => {
        this.setState({
            password: val,
        })
        console.log(this.state.password);
    }
    keySurePassword = (val) => {
        this.setState({
            surepassword: val,
        })
        user.setUsername(this.state.name)
        user.setPassword(val);
        // user.setEmail('ddtom@leancloud.cn');
        user.signUp().then((loginedUser) => {
            console.log(loginedUser);
            this.setState({
                isShow: false,
            })
        }, (error) => {
            console.log(error);
        });
        console.log("sfdjaf");
    }
    keyLogin = (val) => {
        const username = this.state.name;
        console.log("username", username);
        const password = val;
        console.log(val, "val");
        // AV.User.logIn(username, password).then(function (loginedUser) {
        //     console.log(loginedUser);
        // }, function (error) {
        //     console.log(error, "fail");
        //     // alert(error);
        //     this.setState({
        //         isShow: true,
        //     })
        //     console.log(this.state.isShow, "show");
        // });
        AV.User.logIn(username, password).then((loginedUser) => {
            console.log(loginedUser);
        }, (error) => {
            console.log("error", error);
            this.setState({
                isShow: true,
            })
            console.log(this.state.isShow, "show");

        })
    }
    changefalse = () => {
        this.setState({
            isShow: false,
        })
    }
    changetrue = () => {
        this.setState({
            isShow: true,
        })
    }
    render() {
        const isShow = this.state.isShow;
        return (
            <div className="tab">
                <label htmlFor="" onClick={this.changefalse}>LogIn</label>
                <label htmlFor="" onClick={this.changetrue}>SignUp</label>
                {

                    isShow ? (<SignUp onName={this.state.name} onKeyName={this.keyName} onPassword={this.state.password} onSurePassword={this.state.surepassword} onKeyPassword={this.keyPassword} onKeySurePassword={this.keySurePassword} />)
                        : (<Login onName={this.state.name} onKeyName={this.keyName} onSurePassword={this.state.surepassword} onKeyLogin={this.keyLogin} />)
                }
                {/* <Login onName={this.state.name} onPassword={this.state.password} onKeyPassword={this.keyPassword} />  */}
                {/*  */}
            </div>
        )
    }
}

let diaLog = document.getElementById('diaLog');
render(<Dialog isLog={false} />, diaLog);











import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
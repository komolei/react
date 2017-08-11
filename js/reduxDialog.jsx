import React, { Component } from 'react'
import { render } from 'react-dom'
import AV from './leancloud.js'

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import PropTypes from 'prop-types'

const user = new AV.User();

class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         password: '',
    //     }
    // }
    // change = (e) => {
    //     let val = e.target.value;
    //     this.setState({
    //         name: val,
    //     })
    // }
    // changePassword = (e) => {
    //     let val = e.target.value;
    //     this.setState({
    //         password: val,
    //     })
    // }
    // sure = (e) => {
    //     let val = e.target.value;
    //     console.log(val, "val");
    //     if (e.key === 'Enter') {
    //         // alert("keypress success")
    //         this.setState({
    //             password: val,
    //         })
    //         console.log(this.state.password);
    //     }
    //     else {
    //         console.log("gg");
    //     }
    // }

    render() {
        const { name, password, inclick } = this.props;
        return (
            <div>
                {/* <label htmlFor="username">Name</label>
                <input type="username" value={this.state.name} onChange={this.change} />
                <label htmlFor="password">Password</label>
                <input type="password" value={this.state.password} onChange={this.changePassword} onKeyPress={this.sure} /> */}
                <p>name:{name}</p>
                <p>password:{password}</p>
                <button onClick={inclick}>click</button>
            </div>
        )
    }



}
//Prop-type 
Login.PropTypes = {
    name: PropTypes.string.isRequired,
    password: PropTypes.number.isRequired,
    inclick: PropTypes.func.isRequired,
}
// const VisibleLogin=sconnect()(Login);

//VisibleLogin是React-redux生成的容器组件，通过connect()方法自动生成容器组件
//需要输入和输出
//输入，需要将外面的数据（即state对象）转化为UI组件的参数 使用mapStateToProps 其会建立一个外部state对象，到UI组件的props的映射关系
//输出，需要将用户发出的动作变为action对象，从ui组件中传出去  use mapDispatchToProps 

// Action
const inAction = { type: 'in' };
// reducer
function login(state = { name: 'xx', password: 'xx' }, action) {
    let name = state.name;
    let password = state.password;
    switch (action.type) {
        case "in":
            // break;
            return { name: 22, password: password + 123 }
        default:
            return state;
    }

}
// Store
const store = createStore(login);

let mapStateToProps = (state) => {
    return {
        // Login: state.prop
        name: state.name,
        password: state.password,
            //name:state.name的映射关系是，第一个name是ui组件中的同名的参数，在本例子中为<h1>{name}</h1>
        //我们可以改变名称的，结果也不变？不变，因为我改成了xxname，
        //后一个state.name则是stata tree中的属性值。也就是上例中const count=(state={name:'xx'})中name的值
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        inclick: () => {
            dispatch(inAction)
        }
    }
}

//connct 将UI组件变成容器组件，同时在render的时候，要用provider包裹输出VisibleLogin
const VisibleLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

let diaLog = document.getElementById('diaLog');
render(<Provider store={store}>
    <VisibleLogin />

</Provider>, diaLog);
    // <VisibleLogin /> 是用connect得到的标签名，而不是class定义的标签名。gg。。看了好多才看出来。狗带😭

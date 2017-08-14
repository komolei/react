import React from 'react';
import { connect } from 'redux';
import { addPeople } from '../actions'
// console.log("log addPeople", addPeople);
// import {LogIn} from '../containers/login.js'
// console.log("LogIn:",LogIn);
const Login = ({ name, password, onclick }) => {
    // console.log("name is:", name);

    let getName = null;
    let getPassword = null;
    let sure = () => {
        let val = getName.value;
        console.log("val", val);
        return val;

    };
    let sure1 = () => {
        let val = getPassword.value;
        console.log("password:", val);

        return val;
    }
    // store.dispatch(addPeople(name, password))
    let handleClick = (e) => {
        let sure = getName.value.trim();
        let sure1 = getPassword.value.trim();
        onclick(sure, sure1);
    }

    return (

        <div>
            <p>name: {name}</p>
            <label htmlFor="name">name</label>
            <input type="text" id="name" ref={(input) => {
                getName = input
            }} />
            <p>another name: {name}</p>
            
            <label htmlFor="password">password</label>
            <input type="password" id="password" ref={(input) => {
                getPassword = input
            }} />
            <p> {password} is password</p>
            <button onClick={(e) => handleClick(e)}></button>
        </div >
    )

};
// Login = connect()(Login); 
export default Login;
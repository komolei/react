import React from 'react';
// import { connect } from 'redux';
// import { surePeople } from '../actions'
// console.log("log surePeople", surePeople);
// import {LogIn} from '../containers/login.js'
// console.log("LogIn:",LogIn);
//icon 
import { FaUser, FaKey, FaHandPaperO } from 'react-icons/fa'
// console.log("fa",FontAwesome);
const Login = ({ name, password, onclick }) => {
    // console.log("name is:", name,);
    let getName = null;
    let getPassword = null;
    let handleClick = (e) => {
        let sure = getName.value.trim();
        let sure1 = getPassword.value.trim();
        onclick(sure, sure1);
        // sure = '';//清空input
        // sure1 = '';
        // getName.value = "";//user name 不清空
        getPassword = "";
    }

    return (
        <div>
            {/* <p>name: {name}</p> */}
            <label htmlFor="name"><FaUser /></label>
            <input type="text" id="name" ref={(input) => {
                getName = input
            }} placeholder="name" />
            {/* <p>another name: {name}</p> */}
            <p></p>
            <label htmlFor="password"><FaKey /></label>
            <input type="password" id="password" ref={(input) => {
                getPassword = input
            }} placeholder="password" />
            {/* <p> {password} is password</p> */}
            <p></p>

            <span onClick={(e) => handleClick(e)}><FaHandPaperO /></span>
        </div >
    )

};
// Login = connect()(Login); 
export default Login;
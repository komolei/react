import React from 'react';
const Login = ({ name, password, onclick }) => {
    return (
        <div>
            <p>name: {name}</p>
            <label htmlFor="name">name</label>
            <input type="text" id="name" />
            <label htmlFor="password">password</label>
            <input type="password" id="password" />
            <button onClick={onclick}></button>
        </div>
    )

}
export default Login;
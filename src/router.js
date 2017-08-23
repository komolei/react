import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Apps from './store/app.js';
import { render } from 'react-dom';
import React, { Component } from 'react';
import Todo from './components/todo.js';
// import TodoInput from './containers/todoInput.js'
// import NewTodo from './containers/newtodo.js'
// console.log(Apps, "todo"); 
const Basic = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/login">LogIn</Link></li>
                {/* <li><Link to="/todo">Todo</Link></li> */}
                {/* <li><Link to="/todoinput">TodoInput</Link></li> */}
            </ul>
            {/* <hr /> */}
            <Route path="/" component={null} />
            <Route path="/login" component={Apps} />
            {/* <Route path="/todo" component={Todo} /> */}
            {/* <Route path="/todoinput" component={TodoInput} /> */}
        </div>
    </Router>
)

// let dialog = document.getElementById('dialog');

// render(<Basic />, dialog);
export default Basic;


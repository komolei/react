import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Apps from './router/app.js';
import { render } from 'react-dom';
import React, { Component } from 'react';
import Todo from './components/todo.js';
console.log(Apps, "todo");
const Basic = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/login">LogIn</Link></li>
                <li><Link to="/todo">Todo</Link></li>
            </ul>
            {/* <hr /> */}
            <Route path="/" component={null} />
            <Route path="/login" component={Apps} />
            <Route path="/todo" component={Todo} />
        </div>
    </Router>
)

// let dialog = document.getElementById('dialog');

// render(<Basic />, dialog);
export default Basic;


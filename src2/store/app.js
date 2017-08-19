import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import LogIn from './containers/login.js'
// import SignUp from './containers/signup.js'
import App from '../containers/app.js';

// import login from './reducers/login.js'
import appReducer from '../reducers/index.js'

// console.log("addreducer", appReducer);
// console.log(login, "reducer,login");

//router
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'
// let store = store.createStore(login);多写了store,香蕉皮。。
// let store = createStore(login);
let store = createStore(appReducer);
console.log(store.getState(), "store.getState()");
// store.subscribe(()=>{

// })
// let Apps = <Provider store={store}>
//     <App />
// </Provider>

let Apps = ({ store = createStore(appReducer) }) => (
    <Provider store={store}>
        <App />
    </Provider>
)


// const Root = ({ store }) => (
//     <Provider store={store}>
//         <Router>
//             <Route path="/" component={App} />
//         </Router>
//     </Provider>
// );
export default Apps;
// export { Root, dialog }

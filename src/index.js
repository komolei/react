import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LogIn from './containers/login.js'
// import a from './reducers/index.js'
// console.log(
//     a,"a"
// );
import login from './reducers/login.js'

// console.log(login, "reducer,login");


// let store = store.createStore(login);多写了store,香蕉皮。。
let store = createStore(login);

let app = <Provider store={store}>
    <LogIn />
</Provider>

let cc = document.getElementById('cc');


// export default app;

render(app, cc);
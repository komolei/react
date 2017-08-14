// let a = 21;
// const addHtml = `<div><p>${a}</p></div>`
// const getName22 = (name) => { console.log(this.name) };
// const name22 = (getName) => {
//     this.name = "komo"; if (this.name == "komo") {
//         getName22();
//     }
// };
// document.body.innerHTML = addHtml;

// function getName23(callback) {
//     this.name = name;
//     callback();
// };
// function name23() {
//     console.log("tiaoyong success")
//     if (this.name == "komo") {
//         console.log(this.name)
//     }
//     else {
//         console.log("fail", this.name);
//     }

// }
// getName22(name22);

// function sayName(name, callback) {
//     this.name = name;
//     callback(name)
// }
// function getName(name) {
//     if (this.name == "komolei") {
//         console.log(this.name + "success");
//     }
//     else {
//         console.log("fail");
//     }
// }
// sayName("komo", getName);

// function sayName(name, callback) {
//     this.name = name;
//     callback(name)
// }
// function getName(name) {
//     if (this.name == "komolei") {
//         console.log(this.name, "success");
//     }
//     else {
//         console.log("fail");
//     }
// }
// sayName("komo", getName); //结果为fail；
// sayName("komolei", getName) //komolei ,success

// const sayName1 = (name, callback) => { this.name = name; callback() }
// const getName1 = (name) => {
//     this.name=name;
//     if (this.name == "komo") { console.log("success") }
//     else { console.log("fail") }
// }
// getName1("komolei", sayName1);

// const komo =()=> { return {clc: "I am a bay" } };
// document.body.innerText=komo().clc;

//react
// import React,{Component} from 'react';
// import ReactDom from 'react-dom';

// ReactDom.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );
//  require('./js/index.jsx');
// import React from 'react';
// import ReactDom from 'react-dom';
// // import Component1 from './js/index.jsx';
// ReactDom.render(    
//   <h1>hello world!1</h1>,
//   document.getElementById('root')
// );
// require('./js/index.jsx')

// import im from './js/index.jsx';
// import {komolei} from './js/try.jsx';
// import tryangin from './js/tryangin.jsx';
// import { p } from './js/promise.js';
// console.log(p, "ps");
// a.d();

// console.log('dajgog');
// require("./js/tryangin.jsx");
// import tryagain;

require("babel-polyfill");//for using es6 promise

// require("tryagain");
// // var getName1=require('./js/promise.js')
// // const sayName2 = (name, callback) => { name = name; callback() }
// require("im");
// // debugger
// require("./js/jsx.jsx")
// require("./js/jsinJsx.jsx")
// require("./js/component.jsx")
// require("./js/ssk.jsx");
// require("./js/props.jsx");
require("./sass/index.scss")
// // require("./js/jiaocheng.jsx")    
// require("./js/todo.jsx");
// require("./js/time.jsx");
// require('./js/index.jsx');
// require("./js/todo1.jsx");
// require('./js/newTodo.jsx');

// require('./js/cloudTodo.jsx');
// require('./js/userDialog.jsx');
// require('./js/dialog.jsx');
//redux

// require('./js/reduxDialog.jsx');
// require('./js/redux2.jsx');//这个压根不需要状态管理。自己感觉。但是等等还是试试看怎么去弄
//redux
// require("./js/sskk.jsx");
// require('./js/temperature.jsx');


// getName1("komo",sayName2);
// console.log(getName1);
// getName1("komolei", sayName1);


//react-router
// import BasicExample from './js/reactRouter.jsx'

//使用全新的文件管理性质
let a=require('./src/index.js');
console.log("aaa:",a);



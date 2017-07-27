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

import im from './js/index.jsx';
import {komolei} from './js/try.jsx';
// import tryangin from './js/tryangin.jsx';
// import po from './js/promise.js';
// console.log('dajgog');
require("./js/tryangin.jsx");
require("babel-polyfill");//for using es6 promise
var getName1=require('./js/promise.js')
// const sayName2 = (name, callback) => { name = name; callback() }

require("./sass/index.scss")
// getName1("komo",sayName2);
// console.log(getName1);
// getName1("komolei", sayName1);




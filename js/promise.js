require("babel-polyfill");//for using es6 promise


// // const sayName1 = (name, callback) => { this.name = name; this.callback() }
// // const getName1 = (name) => {
// //     this.name = name;
// //     if (this.name == "komo") { console.log("success") }
// //     else { console.log("fail") }
// // };
// // const sayName1 = (name, callback) => { name = name; callback() }
// const sayName1 = (name) => {
//     // return name;
//     if (name == "komo") { console.log("success") }
//     else { console.log("fail") }
// }
// const getName1 = (name) => {
//     // name = name;
//     return name;
// }
// // let getname = new getName1("komo", sayName1);

// // module.exports = getname;

// // module.exports=getNam`e1("komo",sayName1);

// // const promise=new Promise(function(resolve,reject){


// //     //异步成功
// //     if(name="komo"){

// //     }
// // })
// (new Promise(getName1))
// // (new Promisr(say))
// var preloadImage = function (path) {
//   return new Promise(function (resolve, reject) {
//     var image = new Image();
//     image.onload  = resolve;
//     image.onerror = reject;
//     image.src = path;
//     console.log("xiao");
//   });
// };
// let $DocumentMeta = document.getElementsByTagName('meta');
// let _meta = Array.from($DocumentMeta);
// export default preloadImage;


// class People {
//   constructor() {
//     this.name = "clc";
//     this.sex = "male"
//   }
//   c = () => {
//     console.log(this.name);
//   }
// }
// class clc extends People {
//   constructor() {
//     super();
//     this.age = "24"
//     this.name = "komolei"
//   }
//   d = () => {
//     console.log(this.name);
//   }
// }
// export let a = new clc()

//Promise 

// let p = new Promise((resolve, reject) => {
//   // setTimeout(() => {
//   //   console.log(resolve);
//   // }, 3000,1)
//   // setTimeout(resolve,3000,1);
//   // resolve(1);
//   // reject(1);
//   resolve(1);
//   reject(1);
// })
// p.then(val=>{
//   val +=2;
//   return 2
// }).then(val=>{
//   console.log(val)
// }).then(error=>{
//   console.log(error);
// })
// p.then(val=>{
//   console.log(val,"pr value");
//   val +=99;
//   console.log(val);
//   return val;
// }).then(val=>{
//   console.log(val,"gg")
// }).then(val=>{
//   val=88;
//   return val;
// }).then(val=>{
//   console.log('value',val);
// }).catch(val=>{
//   console.log(val,"reject");
// })
// let p2=p.catch(val=>{
//   console.log("p2",val);
// })
// console.log("p.value:",p.PromiseValue);
// console.log("p:",p);
// export { p }

//generator

// function* komo(){
//   yield "hello";
//   yield "world";
//   yield "what";
// }
// let k=new komo();
// let a=k.next();
// let b=k.next();
// console.log(a);
// console.log("b:",b.value);
// console.log(a.value);

//iterator 遍历器
// let a = [1, 2, 3]
// for (let b of a) {
//   console.log(b, 'b');
// }

// const clc = (...rest) => {
//   console.log(rest);
//   for (let val of rest) {
//     console.log(val);
//   }
// }
// clc([1,2,3])

// export {clc}


//ajax 
// var xhr = new XMLHttpRequest();
// xhr.open('get', 'https://jirenguapi.applinzi.com/fm/getLyric.php?&sid=1451876', false);
// xhr.send();
// // xhr.onload
// if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
//   console.log(xhr.responseText);
//   let text = xhr.responseText;
//   // for (let val of text) {
//   //   // console.log("val", val);
//   // }

//   console.log(typeof text);
//   let changeText = JSON.parse(text);
//   console.log(Object.values(changeText)[2]);
// }
// else {
//   console.log("no receive something");
// }

// 结合promise
// let p = new Promise((resolve, reject) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('get', 'https://jirenguapi.applinzi.com/fm/getLyric.php', false);
//   xhr.send();
//   if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
//     console.log(xhr.responseText);
//     let text = xhr.responseText;
//     // for (let val of text) {
//     //   // console.log("val", val);
//     // }

//     console.log(typeof text);
//     let changeText = JSON.parse(text);
//     console.log(Object.values(changeText)[2]);
//     resolve(changeText);
//     reject(error);
//   }
//   else {
//     console.log("no receive something");
//   }
// });

// console.log(p);
// p.then(val => {
//   // console.log(resolve, "resolve");
//   console.log(val, "val");
//   let newTodo = document.getElementById("newTodo");
//   let div = `<p>${Object.values(val)}</p>`
//   return { newTodo, div };
// }).then(val => {
//   // newTodo.innerHTML = div;
//   // console.log(val,"value");
//   let { a, b } = { a: val.newTodo, b: val.div }
//   a.innerHTML=b;
//   console.log("success");
// })


let ajaxPromise = (url) => {
  let p = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, false);
    xhr.send();
    if (xhr.status == 200 || xhr.status == 304) {
      let text = xhr.responseText;
      console.log(text);
      resolve(text);
    }
    else{
      reject(new Error(xhr.status))
    }
  });
  p.then(val => {
    let todo = document.getElementById('newTodo');
    let val1 = JSON.parse(val);
    let div = `<p>${val1.lyric}</p>`
    todo.innerHTML=div;
  }),function(error){
    console.log(error,"error");
  }
}
ajaxPromise("https://jirenguapi.applinzi.com/fm/getLyric.php")
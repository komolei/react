require("babel-polyfill");//for using es6 promise


// const sayName1 = (name, callback) => { this.name = name; this.callback() }
// const getName1 = (name) => {
//     this.name = name;
//     if (this.name == "komo") { console.log("success") }
//     else { console.log("fail") }
// };
// const sayName1 = (name, callback) => { name = name; callback() }
const sayName1 = (name) => {
    // return name;
    if (name == "komo") { console.log("success") }
    else { console.log("fail") }
}
const getName1 = (name) => {
    // name = name;
    return name;
}
// let getname = new getName1("komo", sayName1);

// module.exports = getname;

// module.exports=getName1("komo",sayName1);

// const promise=new Promise(function(resolve,reject){


//     //异步成功
//     if(name="komo"){

//     }
// })
(new Promise(getName1))
// (new Promisr(say))
var preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
let $DocumentMeta = document.getElementsByTagName('meta');
let _meta = Array.from($DocumentMeta);
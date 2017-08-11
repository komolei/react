import AV from "leancloud-storage"
const appId = 'I2nC3Aehn27s6djgSaO3FlA1-gzGzoHsz';
const appKey = 'DBgHHwHFs0j7E26IErHT1TUc';
AV.init({ appId, appKey });
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello todo!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })
// alert("clc komo")
// var Todo=AV.Object.extend('Todo');
// Todo.set('name','clc komolei');
 // 声明一个 Todo 类型
  // var Todo = AV.Object.extend('Todo');
  // // 新建一个 Todo 对象
  // var todo = new Todo();
  // todo.set('name','clc')
  // todo.set('id',222);
  // todo.set('title', '工程师周会');
  // todo.set('content', '每周工程师会议，周一下午2点');
  // todo.set()
  // todo.save().then(function (todo) {
  //   // 成功保存之后，执行其他逻辑.
  //   // console.log('New object created with objectId: ' + todo.id);
  // }, function (error) {
  //   // 异常处理
  //   console.error('Failed to create new object, with error message: ' + error.message);
  // });

  // var query=new AV.Query('Todo');
  // query.get('5985d820570c35006222d73a').then((todo)=>{
  //   console.log(todo.get('content'),"content");
  // }),(error)=>{
  //     console.log(error);
  // }
  //    // 新建 AVUser 对象实例
  // var user = new AV.User();
  // // 设置用户名
  // user.setUsername('Toddm');
  // // 设置密码
  // user.setPassword('cat!@#123');
  // // 设置邮箱
  // user.setEmail('tom@leancloud.cn');
  // user.signUp().then(function (loginedUser) {
  //     console.log(loginedUser);
  // }, function (error) {
  // });
  //  AV.User.signUpOrlogInWithAuthData({
  //     // 微博（weibo）用 uid
  //     // 微信（weixin）和 QQ（qq）用 openid
  //     "openid": "1106257257",
  //     "access_token": "OezXcEiiBSKSxW0eoylIeNFI3H7HsmxM7dUj1dGRl2dXJOeIIwD4RTW7Iy2IfJePh6jj7OIs1GwzG1zPn7XY_xYdFYvISeusn4zfU06NiA1_yhzhjc408edspwRpuFSqtYk0rrfJAcZgGBWGRp7wmA",
  //     "expires_at": "2016-01-06T11:43:11.904Z"
  // }, 'weixin').then(function (s) {
  // }, function (e) {

  // });
export default AV;
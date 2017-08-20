import AV from "leancloud-storage"
const appId = 'I2nC3Aehn27s6djgSaO3FlA1-gzGzoHsz';
const appKey = 'DBgHHwHFs0j7E26IErHT1TUc';
AV.init({ appId, appKey });
export default AV;

export const userLogin = (name, password) => {
    console.log("dddd");
    AV.User.logIn(name, password).then((loginedUser) => {
        console.log(loginedUser, "success","userTodoId",loginedUser.get('userTodoId'));
        alert("login success");
        let userTodoId=loginedUser.get('userTodoId');
        findtodo(userTodoId);
    }, (error) => {
        alert(error + "!");
    }).then((loginedUser) => console.log(loginedUser.get('userTodoId')))
}
export const userSignup = (name, password, email, userTodoId) => {
    let user = new AV.User();
    user.setUsername(name);
    user.setPassword(password);
    user.setEmail(email);
    user.signUp().then((loginedUser) => {
        console.log("signup success", loginedUser,"userTodoId:",userTodoId);
        loginedUser.set('userTodoId', userTodoId);
        loginedUser.save();
    }, (error) => alert(error))
}

//TodoLists

export const addTodoList = (name, password,email) => {
    let Todo = AV.Object.extend('Todo');
    let todo = new Todo();
    todo.set("title", "todo");
    let todoList = JSON.stringify(localStorage.getItem('todo'));
    todo.set("content", todoList);
    todo.save().then((todo) => {
        let userTodoId = todo.id;
        console.log("userTodoId is:", userTodoId);
        // let userTodoId = "addTodoList2222"
        // loginedUser.set('userTodoId', userTodoId);
        userSignup(name, password, email, userTodoId);
    }), (error) => {
        console.log("error", error);
    }

}

export const findTodo = (userTodoId) => {
    let query = new AV.Query('Todo');
    query.get(userTodoId).then(function (todo) {
        // localStorage.setItem('todo', todo)
        let todoList=todo.get('content');
        localStorage.setItem('todo',todoList)
    }, function (error) {
        console.log("find error", error);
    });

} 
//closed window 
export const closedWindow = () => {

    }
    
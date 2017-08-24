import AV from "leancloud-storage"
const appId = 'I2nC3Aehn27s6djgSaO3FlA1-gzGzoHsz';
const appKey = 'DBgHHwHFs0j7E26IErHT1TUc';
AV.init({ appId, appKey });
export default AV;

export const userLogin = (name, password) => {
    AV.User.logIn(name, password).then((loginedUser) => {
        console.log(loginedUser, "success", "todo", loginedUser.get('todo'));
        alert("login success");
        // let userTodoId=loginedUser.get('userTodoId');
        // findtodo(userTodoId);
        // let todo=todoList;
        // loginedUser.set("todo",todo);
        // console.log(loginedUser.id);
        // addTodoList(loginedUser.id,todoList);
        let todo = loginedUser.get('todo');
        let id = loginedUser.id;
        console.log("id", id);
        // JSON.parse(todo);
        console.log("json parse:", todo);
        localStorage.setItem('todo', todo);
        let changeTodo = () => {
            // console.log("dfajlftjal");
            let id=loginedUser.id;
            // console.log("id:", id);
            let todo = localStorage.getItem('todo');
            let changeTodo = AV.Object.createWithoutData('_User', id);
            changeTodo.set('todo', todo);
            changeTodo.save();
            // console.log("suerrdfadfa");
        }
       
        setInterval(changeTodo, 5000)
        // setTimeout(handle,4000);
    }, (error) => {
        alert(error + "!");
    })
}
export const userSignup = (name, password, email) => {
    let user = new AV.User();
    user.setUsername(name);
    user.setPassword(password);
    user.setEmail(email);
    user.signUp().then((loginedUser) => {
        console.log("signup success", loginedUser);
        // loginedUser.set('userTodoId', userTodoId);
        // loginedUser.save();
        // let todo = JSON.stringify(localStorage.getItem('todo'));
        let getTodo = localStorage.getItem('todo');
        let todo;
        getTodo===null ? todo = [] : todo = JSON.parse(localStorage.getItem('todo'));
        loginedUser.set('todo', getTodo);
        loginedUser.save();

    }, (error) => alert(error))
}

//TodoLists

export const addTodoList = (userId, todoList) => {
    // if(AV.)
    let currentUser = AV.User.current();
    if (currentUser) {
        AV.User.get(userId).then((loginedUser) => {
            let todo = loginedUser.get('todo');
            this.props.todoList = todo;
        })
    }
    // let Todo = AV.Object.extend('Todo');
    // let todo = new Todo();
    // todo.set("title", "todo");
    // let todoList = JSON.stringify(localStorage.getItem('todo'));
    // todo.set("content", todoList);
    // todo.save().then((todo) => {
    //     let userTodoId = todo.id;
    //     console.log("userTodoId is:", userTodoId);
    //     // let userTodoId = "addTodoList2222"
    //     // loginedUser.set('userTodoId', userTodoId);
    //     userSignup(name, password, email, userTodoId);
    // }), (error) => {
    //     console.log("error", error);
    // }
    //直接在user中填写数据



}

export const findTodo = (userTodoId) => {
    let query = new AV.Query('Todo');
    query.get(userTodoId).then(function (todo) {
        // localStorage.setItem('todo', todo)
        let todoList = todo.get('content');
        localStorage.setItem('todo', todoList)
    }, function (error) {
        console.log("find error", error);
    });

}
//closed window 
export const closedWindow = () => {
    let todoList = JSON.stringify(localStorage.getItem('todo'))


}

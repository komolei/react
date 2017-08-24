export const sure = 'sure';
export const surePeople = (name, password) => {
    return {
        type: sure,
        name: name,
        password: password,
    }
}
export const add = 'add';
export const addPeople = (name, password, surePassword, email) => {
    return {
        type: add,
        name: name,
        password: password,
        surePassword: surePassword,
        email: email,
    }
}
export let ishow = false;
export const changeshow = 'changeshow';
export const changeShow = (ishow) => {
    return {
        type: changeshow,
        ishow: ishow,
    }

}
//todo
export const addTodo = "addTodo";
export let todolist = [];
export const AddTodo = (text, todolist) => {
    // let todoInput = { id: index, title: text, status: 'uncompleted', deleted: 'false' }
    console.log("action todoInput", text);
    // todolist = todolist.push(todoInput);
    console.log("new todolist: what are :", todolist);
    return {
        type: addTodo,
        text: text,
        todolist: todolist,
    }
}


export const todo = 'todo';
// export const todoList = [];
export const Todo = (todoInput) => {
    return {
        type: todo,
        todoList: todoInput,
    }
}
// export const TodoList=(Todo)=>{
//     return {
//         type: 'de',
//         todoLis
//     }
// }

//export

//state 
//   {
//      todoList:[];
// }
let todoIndex = 0;
export const addIndex = 'addIndex';
export const AddIndex = () => {
    return {
        type: addIndex,
        id: todoIndex++,
    }
}
export const todoList = (todoInput) => {
    return {
        type: addTodo,
        id: todoIndex++,
        todoList: todoInput,
    }
}
export const todoDelete = 'todoDelete';
export const TodoDelete = (todoList) => {
    return {
        type: todoDelete,
        todoList: todoList,
    }
}
export const changeStatus = 'changeStatus';
export const ChangeStatus = (index) => {
    return {
        type: changeStatus,
        index: index,
    }
}
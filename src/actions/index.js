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
export const AddTodo = (text, index) => {
    return {
        type: addTodo,
        text: { id: index, title: text, status: 'uncompleted', deleted: 'false' },
        // todoList:[...todoList,{ id: index, title: text, status: 'uncompleted', deleted: 'false' }]
    }
}
export const todo = 'todo';
// export const todoList = [];
export const Todo = (todoInput) => {
    let todolist = [];
    todolist.push(todoInput);
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
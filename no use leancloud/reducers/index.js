// let a = 1;
// export default a;
import { combineReducers } from 'redux';
import login from './login.js';
import signup from './signup.js';
import todoInput from './todoInput.js';
import TodoList from './todoList.js';
import todoReducer from './todo.js'
const appReducer = combineReducers({
    login,
    signup,
    todoInput,
    TodoList,
    todoReducer,
})
export default appReducer;
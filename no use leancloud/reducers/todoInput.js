import { addTodo } from '../actions'
const todoInput = (state = {
    text: 'init',
    todolist: [],
}, action) => {
    switch (action.type) {
        case addTodo:
            return {
                text: action.text,
                todolist: action.todolist,
            }
        default:
            return state;
    }
}

export default todoInput;
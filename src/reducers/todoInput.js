import { addTodo } from '../actions'
const todoInput = (state = {
    text: { id: 0, title: "first", status: 'uncompleted', deleted: 'false' },
}, action) => {
    switch (action.type) {
        case addTodo:
            return {
                text: action.text,
            }
        default:
            return state;
    }
}

export default todoInput;
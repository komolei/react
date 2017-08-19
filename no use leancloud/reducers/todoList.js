import { todo } from '../actions'
// let count = 0;
// let text = { id: count, title: 'eat', status: 'completed', deleted: 'false' }
const TodoList = (state = { todoList: [] }, action) => {
    switch (action.type) {
        case todo:
            return {
                todoList: action.todoList,
            }
        default:
            return state;
    } 
}
// count++;
export default TodoList;
import { connect } from 'react-redux';
import TodoList from '../components/todoList.js'
import { Todo } from '../actions'
const mapStateToProps = (state, ownProps) => {
    return {
        content: state.todoInput.text,
        todoList: state.TodoList.todoList,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sure: (val) => {
            dispatch(Todo(val))
            console.log("ggaldfgjal");
        },
        changeCompleted: (val) => {
            dispatch(Todo(val))
        },
        onDelete: (e, todoList, key) => {
            todoList.splice(key,1);
            dispatch(Todo(todoList))
        }
    }
}
const TodoList1 = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoList1;
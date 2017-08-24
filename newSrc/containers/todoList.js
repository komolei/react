import { connect } from 'react-redux';
import TodoList from '../components/todoList.js'
import { todo, Todo, AddTodo } from '../actions'
const mapStateToProps = (state, ownProps) => {
    console.log("fuck state", state, "state.todoInput", state.todoInput.todolist);
    return {
        text: state.todoInput.text,
        todoList: state.todoInput.todolist,
        content: state.TodoList.todoList,
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
            todoList.splice(key, 1);
            console.log("container todoList", todoList);
            dispatch(AddTodo('', todoList))
            // dispatch({ type: todo, todoList: todoList });
            dispatch(Todo(todoList))
            // console.log("new store",state.todoInput,todolist);
        }
    }
}
const TodoList1 = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoList1;
import { connect } from 'react-redux';
import newTodo from '../components/newTodo.js';
import { addTodo, todoList, TodoDelete, ChangeStatus } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        todoList: state.todoReducer.todoList,

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sure: (val) => {
            dispatch(todoList(val));
        },
        onDeleted: (todoList) => {
            dispatch(TodoDelete(todoList));
        },
        onStatus: (index) => {
            dispatch(ChangeStatus(index));
        }
    }
}
const NewTodo = connect(mapStateToProps, mapDispatchToProps)(newTodo);
export default NewTodo;
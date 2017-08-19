import { connect } from 'react-redux';
import todoInput from '../components/todoInput.js'
import { AddTodo, Todo } from '../actions'
const mapStateToProps = (state, ownProps) => {
    console.log("state", state.todoInput.text);
    return {
        text: state.todoInput.text,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTodo: (val, index, todolist) => {
            let text = { id: index, title: val, status: 'uncompleted', delete: 'false' }
            todolist.push(text);
            dispatch(AddTodo(text, todolist));
        }
    }
}
const TodoInput = connect(
    mapStateToProps,
    mapDispatchToProps,
)(todoInput)
export default TodoInput;
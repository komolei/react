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
        addTodo: (val, index) => {
            // console.log("val:", val, "index:", index);
            dispatch(AddTodo(val, index))
            // dispatch(Todo(val));
            // console.log("state2", state.todoInput.text);

        }
    }
}
const TodoInput = connect(
    mapStateToProps,
    mapDispatchToProps,
)(todoInput)
export default TodoInput;
import { connect } from 'react-redux';
import Signup from '../components/Signup.js'
import { addPeople } from '../actions'
import { AV, userSignup, addTodoList } from '../leancloud/init.js'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name,
        password: state.password,
        email: state.email,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        click: (name, password, email) => {
            // let hidden = userSignup(name, password, email);
            addTodoList(name, password, email);
            //还是要用router进入跳转。不然找不到什么好的方法。mmp

            // dispatch(addPeople(name, password, email))//不需要，只是为了试试看redux
        }
    }
}
const SignUp = connect(mapStateToProps, mapDispatchToProps)(Signup);
export default SignUp; 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPeople } from '../actions'
import Login from '../components/login.js'

// console.log("container", addPeople().name);
const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name,
        password: state.password,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onclick: (name, password) => {

            // console.log(val,"valss");
            // dispatch(addPeople)
            //error，因为传入的addPeople是方法，要得到action,是这个方法的返回值，则要进行调用。
            console.log("name:",name);
            dispatch(addPeople(name, password))
        }
    }
}
const LogIn = connect(mapStateToProps, mapDispatchToProps)(Login);
// console.log("connect", connect);
// class App extends Component {
//     render() {
//         const { name, password, onclick } = this.props;
//         return (
//             <Login onclick={(name, password) => {
//                 dispatch(addPeople(name, password))
//             }} />
//         )
//     }
// }
// const LogIn = connect()(App);error,gg|
export default LogIn;
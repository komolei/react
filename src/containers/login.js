import React from 'react'
import { connect } from 'react-redux'
import { addPeople } from '../actions'
import Login from '../components/login.js'

// let AddPeople=(dispatch)=>{

//     return (
//         <div>

//         </div>
//     )

// }

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name,
        password: state.password,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onclick: () => {
            dispatch(addPeople)
        }
    }
}
const LogIn = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LogIn;
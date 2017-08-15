import { connect } from 'react-redux'
import { surePeople } from '../actions'
import Login from '../components/login.js'
import { AV, userLogin } from '../leancloud/init.js'

// console.log("av:", Av);

// console.log("container", surePeople().name);
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
            // dispatch(surePeople)
            //error，因为传入的surePeople是方法，要得到action,是这个方法的返回值，则要进行调用。
            console.log("name:", name);//得到了ui组件中传入的input的值了。
            //现在开始连接leancloud了
            // Av.User.logIn(name, password).then((loginedUser) => {
            //     console.log(loginedUser, "success");
            //     alert("login success");

            // }, (error) => {
            //     alert(error + "!");
            // })
            userLogin(name,password);
            // dispatch(surePeople(name, password))//这一步并不需要，只是为了试试看redux而用的
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
//                 dispatch(surePeople(name, password))
//             }} />
//         )
//     }
// }
// const LogIn = connect()(App);error,gg|
export default LogIn;
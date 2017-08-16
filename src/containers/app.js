import React, { Component } from 'react';
import LogIn from './login.js'
import SignUp from './signup.js'
import Todo from '../components/todo.js';
// import { ishow } from '../actions'
// import { connect } from 'react-redux';
// console.log("ishow:", ishow);
// let ishow = false;
//居然忘记洗return,幸好发现了。

class App extends Component {

    // } = ({ ishow1 = ishow }) => {

    constructor() {
        super();
        this.state = {
            ishow: false,
            hidden: false,
        }
    };
    changeShow = (show) => {
        this.setState({
            ishow: show,
        })
    }
    //现在才发现，mmp哟，是react搭配react-redux，我竟然不用react的东西。。。。我也是奇葩啊
    render() {
        let ishow = this.state.ishow;
        const { click } = this.props;

        return (

            <div >
                <p><span id="login" onClick={(e) => { this.changeShow(null); }}>LogIn</span>
                    <span> </span>
                    <span id="signup" onClick={() => { this.changeShow(true); }}>SignUp</span></p>
                {/* <LogIn show={ishow} /> */}
                {/* {console.log("ishow33:", this.state.ishow)} */}
                {
                    ishow ? <SignUp /> : <LogIn />

                }

                {/* {console.log("ishow33x:", ishow)} */}

                {/* <SignUp show={ishow} /> */}
                {/* <LogIn />
                <SignUp /> */}

            </div>
        )
    }

}
// console.log(App, "app");
export default App;
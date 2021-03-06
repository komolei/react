import React, { Component } from 'react'
import { render } from 'react-dom'
import AV from "leancloud-storage"


// import * as leanCloud from './leancloud.js'
// import "font-awesome-compass";
// let Fa=require('react-fontawsesome') 
class Login extends Component {
    change = (e) => {
        let val = e.target.value;
        if (e.keyUp === 'Enter') {
            this.props.onKey(val);
        }
    }
    sure = (e) => {
        let val = e.target.value;
        if (val === this.props.onSurePassword) {
            alert("login success")
        }
    }
    render() {
        return (
            <div>
                <label htmlFor="username">Name</label>
                <input type="username" value={this.props.onName} onChange={this.change} />
                <label htmlFor="password">Password</label>
                <input type="password" defaultValue={this.props.onPassword} onKeyPress={this.sure} />
            </div>
        )
    }
}
class SignUp extends Component {
    changeName = (e) => {
        let val = e.target.value;
        this.props.onKeyName(val);
        // console.log("user", user);
    }
    changePassword = (e) => {
        let val = e.target.value;
        this.props.onKeyPassword(val);
        // console.log(val,"vall");
    }
    changePassword = (e) => {
        let val = e.target.value;
        this.props.onKeyPassword(val);
        // val.length>6?this.props.onKeyPassword(val):alert("this password should be greater than 6-digit")

    }
    surePassword = (e) => {
        let val = e.target.value;
        // let surePassword = this.props.surepassword;//error val才是值
        let onPassword = this.props.onPassword;
        console.log("password", onPassword, "val", val, );
        if (e.key === 'Enter') {
            if (val === onPassword) {
                this.props.onKeySurePassword(val);
                alert("Sign Up success ")
            }
            else {
                alert("前后密码不一致")
            }
        }
    }
    render() {
        return (
            <div>
                <label htmlFor="username">Name</label>
                <input id="username" type="text" defaultValue={this.props.onName} onChange={this.changeName} />
                <p>{this.props.onName}</p>
                <label htmlFor="password">Password</label>
                {/* <input id="password" type="password" defaultValue={this.props.onPassword} onKeyPress={this.surePassword} onChange={this.changePassword} /> */}
                <input id="password" type="password" defaultValue={this.props.onPassword} onChange={this.changePassword} />
                <label htmlFor="surepassword">sure your password</label>
                <input id="surepassword" type="password" defaultValue={this.props.onSurePassword} onKeyPress={this.surePassword} />
            </div>
        )
    }
}

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            name: '',
            password: '',
            surepassword: '',
        }
    }
    keyName = (val) => {
        this.setState({
            name: val,
        })
        console.log(this.state.name);
    }
    keyPassword = (val) => {
        this.setState({
            password: val,
        })
        console.log(this.state.password);
    }
    keySurePassword = (val) => {
        this.setState({
            surepassword: val,
        })
    }
    changefalse = () => {
        this.setState({
            isShow: false,
        })
    }
    changetrue = () => {
        this.setState({
            isShow: true,
        })
    }
    render() {
        const isShow = this.state.isShow;
        return (
            <div className="tab">
                <label htmlFor="" onClick={this.changefalse}>LogIn</label>
                <label htmlFor="" onClick={this.changetrue}>SignUp</label>
                {

                    isShow ? (<SignUp onName={this.state.name} onKeyName={this.keyName} onPassword={this.state.password} onSurePassword={this.state.surepassword} onKeyPassword={this.keyPassword} onKeySurePassword={this.keySurePassword} />)
                        : (<Login onName={this.state.name} onPassword={this.state.password} onSurePassword={this.state.surepassword} />)
                }
                {/* <Login onName={this.state.name} onPassword={this.state.password} onKeyPassword={this.keyPassword} />  */}
                {/*  */}
            </div>
        )
    }
}

let diaLog = document.getElementById('diaLog');
render(<Dialog isLog={false} />, diaLog);
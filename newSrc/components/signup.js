import React, { Component } from 'react'
import { render } from 'react-dom'
import { FaUser, FaKey, FaHandPaperO, FaEnvelopeO } from 'react-icons/fa'

class Signup extends Component {
    handleClick = (e) => {
        let name = this.getName.value.trim();
        let password = this.getPassword.value.trim();
        let surePassword = this.getSurePassword.value.trim();
        let email = this.getEmail.value.trim();
        if (name.length > 3) {
            if (password.length > 6) {
                if ((/\@/g).test(email)) {
                    password === surePassword ? this.props.click(name, password, email) : alert("no same password")
                } else {
                    alert("your emial is not rightful");
                }
            } else {
                alert("this length should more than 6")
            }
        } else {
            alert("this length should more than 3")
        }
        // password === surePassword ? this.props.click(name, password, email) : alert("no same password")FF
    }
    render() {
        const { name, password, surePassword, email, click } = this.props;
        // console.log("name is:wath", name, click, "click");
        return (
            <div>
                <label htmlFor="name1"><FaUser /></label>
                <input type="text" id="name1" ref={(input) => this.getName = input} placeholder="name" />
                <p></p>
                <label htmlFor="password1"><FaKey /></label>
                <input type="password" id="password1" ref={(input) => this.getPassword = input} placeholder="input password" />
                <p></p>
                <label htmlFor="surePassword"><FaKey /></label>
                <input type="password" id="surePassword" ref={(input) => this.getSurePassword = input} placeholder="input password again" />
                <p></p>
                <label htmlFor="email"><FaEnvelopeO /></label>
                <input type="text" id="email" ref={(input) => this.getEmail = input} placeholder="email" />
                <p></p>
                <span onClick={(e) => {
                    this.handleClick(e)
                }}><FaHandPaperO /></span>
                {/* <p>Name:{name}</p> */}
            </div>
        )
    }
}
export default Signup;
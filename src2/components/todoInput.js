import React, { Component } from 'react';
// import {render} from 'react-dom';
// import 
import { FaCalendarPlusO } from 'react-icons/fa'
let index = 0;
let todoInput = ({ text, addTodo }) => {
    let node = null;
    let sure = (e) => {
        let val = node.value.trim();
        // debugger;
        e.key === 'Enter' ? (++index , addTodo(val, index), node.value = '') : console.log("please press Enter");
        return index;
    }
    return (
        <div>
            <label htmlFor="todoInput"><FaCalendarPlusO /></label>
            <input type="text" id="todoInput" ref={(input) => node = input} onKeyPress={(e) => sure(e)} placeholder="please Enter" />
            <p>{text.title}</p>

        </div>
    )
}
export default todoInput;
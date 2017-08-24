import React from 'react';
import { FaCalendarPlusO } from 'react-icons/fa'
let index = 0;
let todolist=[];
let todoInput = ({ text, addTodo }) => {
    let node = null;
    let sure = (e) => {
        let val = node.value.trim();
        e.key === 'Enter' ? (++index , addTodo(val, index,todolist), node.value = '') : console.log("please press Enter");
        return index;
    }
    return (
        <div>
            <label htmlFor="todoInput"><FaCalendarPlusO /></label>
            <input type="text" id="todoInput" ref={(input) => node = input} onKeyPress={(e) => sure(e)} placeholder="please Enter" />
        </div>
    )
}
export default todoInput;
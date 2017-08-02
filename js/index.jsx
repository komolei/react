


// import React from 'react';
// class Dialog extends React.Component {    
//   render() {        
//       return (            
//           <div>Hello World!</div>        
//       )    
//   }
// }
// //导出组件
// export default Dialog;
// import React from 'react';
// import ReactDom from 'react-dom';
// const clc=ReactDom.render(
//     <h1>small guy!</h1>,
//     document.getElementById('root'),
// );
// // module.exports=clc;
// export default clc;
import React, { Component } from 'react'
import { render } from 'react-dom';
class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }
    change = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return <div>
            <p>input: {this.state.value}</p>
            <input type="text" value={this.state.value} onChange={this.change} placeholder="请输入"/>
        </div>
    }
}
let input = document.querySelector('.input')
render(<Input />, input);
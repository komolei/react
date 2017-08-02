import React, { Component } from 'react'
import { render } from 'react-dom'

let time = document.getElementsByClassName('time')[0]


// let change = () => {
//     let Time = (props) => {
//         return <p>{props.time.toString()}</p>
//     }
//     render(<Time time={new Date()} />, time);

// }
// setInterval(change, 1000);
let F = (props) => {
    return <p>{props.time.toString()}</p>
}
// class F extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <p>{time.toString()}</p>
//     }
// }
class Time extends Component {
    constructor(props) {
        super(props);
        //super(),此方法是作为Component的构造函数
        this.state = {
            time: new Date(),
        }
    }
    // change = (state, props) => {
    //     // let id = setInterval((props) => {
    //     //     return this.state.time = new Date();
    //     // }, 1000)
    //     setInterval((state) => {
    //         state: new Date();
    //     }, 1000);
    // }
    // change(props){
    //     setInterval({props=new Date()},1000);
    // }
    // change(){
    //     this.state.time=setInterval(this.state.time=new Date(),1000);
    // }
    // change = (state) => {
    //     //    console.log({time:new Date()});
    //     let clock = setInterval((state) => {

    //         {time:new Date() } //怎么得到的time给上面的this.state.time?
    //     }, 1000)
    //     return clock;
    // console.log(clock)
    // let id = setInterval({
    //     time: new Date(),
    // }, 1000)
    // return { time: state.time+1 }

    // }
    clock() {
        this.setState({
            time: new Date(),
        })
    }
    componentDidMount() {
        this.clockId = setInterval((() => this.clock()), 1000);
        // setInterval(this.setState({
        //     time: new Date(),
        // }), 1000);
        // this.change();
        // this.setState({
        //     time: this.change
        // })
        //应该是在mount和unmount的时候去使用定时器
        // // this.change();
        // // this.setState({
        // //     time: this.change
        // // })

        // this.setState({
        //     time: change
        // })
    }
    componentWillUnmount() {
        clearInterval(this.clockId);
        console.log("i am going unmounting");
    }
    render() {
        let time = this.state.time;
        // return <div>{time.toString()}</div>
        return <F time={time} />
    }
}
render(<div>
    <Time />
</div>, time);

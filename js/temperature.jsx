import React, { Component } from 'react'
import { render } from 'react-dom'
let Boil = (props) => {
    if (props.calculator >= 100) {
        return <div>This is over 100</div>
    }
    else {
        return <div>This is lower than 100</div>
    }
    // (props.calculator > 100) ?  return <div>This is over 100</div> : return <div>This is lower than 100</div>;
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
toFahrenheit = (celsius) => {return (celsius * 9 / 5) + 32; };

tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input);
    const round = Math.round(output * 1000) / 1000;
    return round.toString()
}
const name = {
    c: "Celsius",
    f: "Fahrenheit"
}
class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     temperature: ""
        // } 这个可以从父组件得到
    }
    changeTemperature = (event) => {
        // this.setState({
        //     temperature: event.target.value
        // })
        this.props.onchangeTemperature(event.target.value);

    }
    // changeTemperature(e){
    //     this.props.onchangeTemperature(e.target.value);
    // }
    render() {
        const choose = this.props.choose;
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;

        //return 必须跟语句相连在一起，
        // return 
        //      <div></div>
        //上面这种形式会报错的 
        return (
            <div>
                <span>
                    Enter temperature in {name[choose]}
                </span>
                <input type="text" value={temperature}
                    onChange={this.changeTemperature} />

            </div>
        );
    }
}
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            choose: 'c',
        }
        /**
         this.changeTemperature= this.changeTemperature.bind(this); 还是使用箭头函数好。刚刚居然忘记写左边部分

         */
    }
    // handleTemperature = (e) => {
    //     this.setState({
    //         temperature: e.target.value,
    //     })
    // }
    handleCelsius = (temperature) => {
        this.setState({
            choose: 'c', temperature
        })
    }
    handleFahrenheit = (temperature) => {
        this.setState({
            choose: 'f', temperature
        })
    }

    render() {
        // const 
        return (<div>
            <TemperatureInput choose="c" onchangeTemperature={this.handleCelsius}  />
            <TemperatureInput choose="f" onchangeTemperature={this.handleFahrenheit} />
            <Boil calculator={this.state.temperature} />
        </div>)
    }
}
let temperature = document.getElementById('temperature')
render(<Calculator />, temperature);
 /**
* <input type="text" value={this.state.temperature} onChange={this.changeTemperature} />
            <span>{this.state.temperature}</span> 
            <Boil calculator={this.state.temperature} /> 
             */
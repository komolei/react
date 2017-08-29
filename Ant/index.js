import React, { Component } from 'react';
import { render } from 'react-dom';
import { Breadcrumb, Carousel } from 'antd';
import './css/ant.css';
// require('./css/ant.css');
let root = document.getElementById('root');
let Nav = () => {
    return <div>
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </Carousel>
    </div>
}

render(<Nav />, root);
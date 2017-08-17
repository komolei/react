import React, { Component } from 'react';
import { render } from 'react-dom';
import Basic from './router.js'
require('./scss/index.scss')
let dialog = document.getElementById('dialog');
render(<Basic />, dialog)
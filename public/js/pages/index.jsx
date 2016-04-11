/*'use strict';*/

import React, { Component, ProTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Avatar from '../components/avatar.jsx';
import InputBox from '../components/inputBox.jsx';
import MessageBox from '../components/messageBox.jsx';
//import Login from './pages/login.jsx';

export default class Index extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(this);
        const { handleSendMessage, message } = this.props;
        console.log('index message ',message);
        return (
            <div className = "inputArea">
                <MessageBox message = { message }/>
                <InputBox handleSendMessage = { handleSendMessage } />
            </div>
        )
    }
}
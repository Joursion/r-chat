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
      //  console.log(this);
        let { handleSendMessage, message, user} = this.props;

      //  console.log(user);
        // <div className = "show_user">  {user} </div>
        //console.log('handleSendMessage ', handleSendMessage);
        return (
            <div className = "inputArea">
                <div className = "user">
                    <img src={user.avatar} style={{width:50,height:50}}/>
                    <span>{ user.username }</span>
                </div>
                <MessageBox message = { message }/>
                <InputBox handleSendMessage = { handleSendMessage } user = { user }/>
            </div>
        )
    }
}
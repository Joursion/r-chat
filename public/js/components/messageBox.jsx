'use strict';

import React, { Component, PropTypes } from 'react';
import Message from './message.jsx';
import Store from '../store.js';

export default class messageBox extends Component{

    componentDidUpdate(){
        
    }
    
    componentDidMount() {
        setTimeout(() => {
            let msgbox = this.refs.msgbox;
            msgbox.scrollTop = msgbox.scrollHeight || 0;
        }, 100);
    }
   
    render() {
        let { message } = this.props;
        message = message || [];
     //   console.log('messagebox message',message);
        return(
            <div style = {{
                flex: '1 1 0',
                overflow: 'auto'
            }}
            ref ="msgbox">
                {
                    message.map(function(msg, index) {
                        return <Message  key = {index} message = {msg}/>
                    })
                }
            </div>
        );
    }
    
}

/*
messageBox.propTypes = {
    message : PropTypes.array.isRequired
};
*/



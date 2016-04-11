'use strict';

import React, { Component, ProTypes } from 'react';
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
        console.log("msg", message);
        console.log('type', typeof {message});
       // console.log(this);
        /*    {
         message.map((onemessage, index) => {

         return <Message
         key = {index}
         // avatar = { message.avatar }
         // time = { message.time }
         content = { onemessage }
         //username = { message.username }
         />
         })

         }*/
        
        return(
            <div style={{
                flex: '1 1 0',
                overflow: 'auto'
            }}
            ref ="msgbox">
            <Message content = {message} />
            </div>
        )
    }
    
}
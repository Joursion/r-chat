'use strict';

import React, { Component, PropTypes } from 'react';
import Avatar from './avatar.jsx';

export default class Message extends Component {
   /* static defaultProps = {
        avatar: 'dsa',
        name: 'tourist',
        content: 'das',
        time: '00:00:00'
    };*/

    /*
    *   <div className= "User-avatar">
     <Avatar src = { content.avatar } />
     </div>
     <span>{ content.name } { time }</span>
    * */
    render() {

        let { message } = this.props;
       // console.log('message', message);
        let oneStyle = {
            one:{
                display: "flex",
                alignItems: "flex-start",
                margin:0,
                marginTop:10,
                height: "80%"
            },
            info:{
                color: "#d8d8d8"
            },
            avatar:{
                marginRight: "1em",
                width:50,
                height:50,
                borderRadius:50
            },
            message: {
                flex:1,
                paddingTop:5,
                borderRadius: 20,
                border: "1px solid #000000",
                padding: "4px 10px",
                marginTop: 10
            },
            content: {
                display: "flex",
                alignItems:"flex-start",
                flexDirection: "column",
                marginLeft: 10
            }
        };
        
        return (
            <div style = { oneStyle.one } >
                <img src={ message.user.avatar } style={oneStyle.avatar}/>
                <div style={ oneStyle.content }>
                    <div style={oneStyle.info}>
                        <strong>{ message.user.username }</strong> { message.time }
                    </div>
                    <span style={ oneStyle.message }> { message.message }</span>
                </div>
            </div>
        )
    }
}
/*

Message.propTypes = {
    avatar: ProTypes.string.isRequired,
    name: ProTypes.string.isRequired,
    content: ProTypes.string.isRequired,
    time: ProTypes.string.isRequired
};
*/


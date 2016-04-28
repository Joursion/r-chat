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
            display: 'flex',
            background: '#ffffff'
        };
        
        return (
            <div className = "One" style = { oneStyle } >
                <div><img src={ message.user.avatar } style={{width:40, height: 40}}/>
                    { message.user.username }
                    <span> { message.time } </span>
                    <div> { message.message }</div>
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


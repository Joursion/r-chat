'use strict';

import React, { Component, ProTypes } from 'react';
import Avatar from './avatar.jsx';

export default class Message extends Component {
   /* static defaultProps = {
        avatar: 'dsa',
        name: 'tourist',
        content: 'das',
        time: '00:00:00'
    };*/

    render() {
        let { avatar, name, content, time } = this.props;

        let oneStyle = {
            display: 'flex',
            background: '#ffffff'
        };
        
        return (
            <div className = "One" style = { oneStyle } >
                <div className= "User-avatar">
                     <Avatar src = { avatar } />
                </div>
                <span>{ name } { time }</span>
                <div>{ content }</div>
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


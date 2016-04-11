'use strict';

import React, { Component, ProTypes } from 'react';
import io from 'socket.io-client';

export default class InputBox extends Component {

    /*sendMessageCheck (message) {
        if (message.trim() === '') {
            return false;
        }
        return true;
    }*/

    componentDidMount () {
        let socket = io();
        socket.emit('ison',"ison");
    }

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let { handleSendMessage } = this.props;
      //  console.log(handleSendMessage);
        let messageInputStyle = {
            height:100,
            width: 200,
            background: '#fff000'
        };

        return (
            <div className="messageInput"
                 style = { messageInputStyle }
                >
                <input
                    type = 'text'
                    className = 'input-message'
                    ref = 'inputMessage'
                    maxLength = {512}

                    />
                <button onClick = { e => {
                    let inputMessage = this.refs.inputMessage.value;
                    let Mto = 'all';
                 /*   if (sendMessageCheck(inputMessage)) {
                        return;
                    }*/
                    handleSendMessage(inputMessage, Mto);
                }}
                >发送</button>
            </div>
        )
    }
}
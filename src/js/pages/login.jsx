'use strict';

import React, { Component, ProTypes } from 'react';

export default class Login extends Component {
    infoCheck (username, password) {
        if (username === "" || password === "") {
            return {type: "error", content: "用户名或密码不能为空"};
        }
        
    }
    
    showErrMsg (type, content) {
        if (type === 'success') {
            return (
                <div style = {{color: 'green'}}>
                    <span>{ content }</span>
                </div>
            )
        } else if (type === 'error') {
            return (
                <div style = {{color: 'red'}}>
                    <span>{ content }</span>
                </div>
            )
        }
    }
    
    render() {
        
        const { handleLogin } = this.props;
       // console.log(handleLogin);

        return (
            <div>
                <form>
                    <input type="text" ref="username" placeholder="用户名" />
                    <input type="password" ref="password" placeholder="密码" />
                </form>
                <button onClick = { e => {
                        let username = this.refs.username.value;
                        let password = this.refs.password.value;
                        handleLogin(username, password);
                    }} 
                > 登录 </button>

            </div>
        )
    }
}
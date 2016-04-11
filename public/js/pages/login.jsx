'use strict';

import React, { Component, ProTypes } from 'react';

export default class Login extends Component {
    infoCheck (username, password) {
        this.setState({
            username: undefined,
            password: undefined
        });
        
        if (username === "" || password === "") {
            return false;
        }
    }
    
    render() {
        
        const { handleLogin } = this.props;
        console.log(handleLogin);
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
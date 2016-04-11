'use direct';

import React from 'react';

export default class Register extends React.Component {
    render() {
        const { handleRegister } = this.props;
        console.log(handleRegister);
        return (
            <div>
                <form>
                    <input type="text" ref="username" placeholder="用户名" />
                    <input type="password" ref="password" placeholder="密码" />
                </form>
                <button onClick = { e => {
                        let username = this.refs.username.value;
                        let password = this.refs.password.value;
                        handleRegister(username, password);
                    }}
                    > 注册 </button>
            </div>
        )
    }
}
'use direct';

import React from 'react';

export default class Register extends React.Component {
    
    static errMsg(type, content) {

        if(type === "error") {
            console.log('dsaasd');
            return (
                <div className = "errmsg" style = {{color:'red'}}>
                    { content }
                </div>
            );
        }
    }
    
    checkRegInfo(username, password) {
        if (username === "") { 
            console.log('dsa');
            this.errMsg("error","请输入用户名");
            return false;
        } else if (password === "") {
            this.errMsg("error","密码错误");
            return false;
        }
        return true;
    }
    //   handleRegister(username, password);
    render() {
        const { handleRegister, handleRegInfoCheck } = this.props;
      //  console.log(handleRegister);
        
        return (
            <div>
                <form>
                    <input type="text" ref="username" placeholder="用户名" />
                    <input type="password" ref="password" placeholder="密码" />
                </form>
                <button onClick = { e => {
                        let username = this.refs.username.value;
                        let password = this.refs.password.value;
                        {
                            if(!this.checkRegInfo.bind(this)(username, password)){
                                return;
                            }
                        }
                        handleRegister(username, password);
                    }}
                    > 注册 </button>
            </div>
        )
    }
}
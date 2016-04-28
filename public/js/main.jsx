import React, { Component, ProTypes } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import io from 'socket.io-client';

//Store
const Store = require('./store.js');

//Action
const Action = require('./action.js');

//part  
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

// pages
import Login from './pages/login.jsx';
import About from './pages/about.jsx';
import Index from './pages/index.jsx';
import Register from './pages/register.jsx';
import Test from './pages/test.jsx';

//default
import DefaultInfo from './default.js';

// registe login sendMessage

export default class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleRegister (username, password) {
        fetch("/register",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json())
        .then(data => {
                console.log(data);
                this.porps.history.push('/lgoin');
            })
        .catch(e => console.log('handleRegister error',e));
    }

    handleLogout () {
        window.localStorage.removeItem('key');
    }

    handleLogin (username, password) {
        fetch("/login",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json())
        .then(data => {
                console.log(data);
                if (data.error) {
                    Store.dispatch(Action.setLogin(true));
                } else {
                    Store.dispatch(Action.setLogin(true));
                    Store.dispatch(Action.setUser({
                        username: data.username,
                        avatar: data.avatar
                    }));
                    this.props.history.push('/index');

                    window.sessionStorage.setItem('token',data.token);
                    window.localStorage.setItem('username', username);
                    window.localStorage.setItem('password', password);
                }
            })
        .catch(e => console.log('handleLogin error',e));
    }

    handleRegInfoCheck(username, password) {
        fetch("/regcheck",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.text())
        .then(data => {return data.res})
        .catch(e => console.log('handleRegInfoCheck error',e));
    }

//@params 
// Mto:the message to 
    handleSendMessage (message, Mto, user, time) {
        if (Mto == 'all') {
            fetch("/message",{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: message,
                    group: Mto,
                    user: user,
                    time: time
                })
            }).then(res => res.text())
            .then(data => console.log(data))
            .catch(e => console.log('error',e));

            let socket = io();
            socket.emit('send', {
                message: message,
                user: user,
                time: time
            });

        }
    }

    componentWillMount() {
        let token = window.sessionStorage.getItem('token');
        if (token) {
            fetch("/token",{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: token
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.ok) {
                        Store.dispatch(Action.setLogin(true));
                        Store.dispatch(Action.setUser(data.user));
                    }
                });

        }

        fetch("/message",{
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                data.map(d =>{
                    Store.dispatch(Action.groupMessage(d.group, d.content, d.user, d.time));
                });
            })
            .catch(e => console.log('error', e));


        let socket = io();
        socket.on('new', data => {
            console.log(data);
            Store.dispatch(Action.groupMessage(data.group, data.data.message, data.data.user, data.data.time));
        });
    }
    
    componentDidMount(){
        
    }

    render() {
        let { message, user , isLogin} = this.props;
        message = message || DefaultInfo.messages;
        user = user || DefaultInfo.user;
        const props = {
            index: {
                user,
                message,
                handleSendMessage: this.handleSendMessage.bind(this)
            },
            register: {
                handleRegister: this.handleRegister.bind(this),
                handleRegInfoCheck: this.handleRegInfoCheck.bind(this)
            },
            login: {
                handleLogin: this.handleLogin.bind(this)
            }
        };

        return(
            <div className="back">
                <div>
                    <Header handleLogout = { this.handleLogout.bind(this)  }
                            isLogin = { isLogin }
                    />
                    {
                        this.props.children && React.cloneElement(this.props.children, props[this.props.children.props.route.path])
                    }
                    <Footer/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        message: state.message,
        user: state.user,
        isLogin: state.isLogin
    }
}

function mapDispatch(dispatch) {
    return bindActionCreators(Action, dispatch);
}
// const mapStateToProps = state =>{
//     return  {};
// }

const ConnectedApp = connect(mapStateToProps ,mapDispatch)(App);

ReactDOM.render(
    <Provider store = { Store }>
        <Router history = { hashHistory }>
            <Router path = "/" component = { ConnectedApp }>
                <IndexRoute component={ Index }/>

                <Route path = "login" component = { Login } />
                <Route path = "about" component = { About } />
                <Route path = "register" component = { Register } />
                <Route path = "index" component = { Index } />
                <Route path = "test" component = { Test } />
            </Router>
        </Router>
    </Provider>
    , document.querySelector("#root")
);

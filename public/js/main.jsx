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

// registe login sendMessage

export default class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleRegister (username, password) {
        console.log(username);
    }

    handleLogout () {

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
        .then(data => console.log(data))
        .catch(e => console.log('error',e));
    }

//@params 
// Mto:the message to 
    handleSendMessage (message, Mto) {
        if (Mto == 'all') {
            fetch("/message",{
                method: 'POST',
                headers: {
                    'Content-Type': 'text/html'
                },
                body: message
            }).then(res => res.text())
            .then(data => console.log(data))
            .catch(e => console.log('error',e));

            let socket = io();
            socket.emit('send', message);
        }
    }

    getMessage() {

    }

    componentWillMount() {  
        let socket = io();
        socket.on('new', data => {
            console.log(data);
            Store.dispatch(Action.groupMessage(data.group, data.message));
        });
        
        // socket.on('new personal message', data =>{
        //     this.props.dispatch(Action.personalMessage(data.id, data));
        // })
    }
    
    componentDidMount(){
        
    }

    render() {
        let { message } = this.props;
        //message = message || [];
        let isLogin = false;
        let user = "A";
        const props = {
            index: {
                user,
                message,
                handleSendMessage: this.handleSendMessage.bind(this)
            },
            register: {
                handleRegister: this.handleRegister.bind(this)
            },
            login: {
                handleLogin: this.handleLogin.bind(this)
            }
        };

        return(
            <div className="back">
                <div>
                    <Header handleLogout = { this.handleLogout.bind(this) }
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

function mapselect(state) {
    return {
        message: state.message,
        user: state.user
    }
}

// const mapDispatch = dispatch => {
//     return {
//         bindActionCreators(Action, dispatch);
//     }
// }

function mapDispatch(dispatch) {
    return bindActionCreators(Action, dispatch);
}
// const mapStateToProps = state =>{
//     return  {};
// }

const ConnectedApp = connect(mapselect,mapDispatch)(App);

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

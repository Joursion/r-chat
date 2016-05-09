import React, { Component, ProTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Avatar from '../components/avatar.jsx';
import InputBox from '../components/inputBox.jsx';
import MessageBox from '../components/messageBox.jsx';
//import Login from './pages/login.jsx';

/*material components*/
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class Index extends Component {

    constructor(props, context) {
        super(props, context);
    }
    /*
     <MuiThemeProvider muiTheme={getMuiTheme()}>
     <RaisedButton label="Default"  />
     </MuiThemeProvider>
    * */

    render() {
      //  console.log(this);
        let { handleSendMessage, message, user} = this.props;
        let style = {
            container: {
                display: "flex",
                minHeight: "100vh",
                flexDirection: "row",
                margin: "auto",
                minWidth:900,
                marginRight: "1em",
                height: 500
            },
            side_bar: {
                display: "flex",
                flex: 1,
                width:100,
                flexDirection: "column"
            },
            content:{
                display: "flex",
                flex: 4,
                width:800,
                flexDirection: "column"
            },
            msgBox: {
                display: "flex",
                flex: 1,
                width:600
            },
            inputBox: {
                display: "flex",
                height: 40
            }
        };
        return (
            <container style = {style.container}>
                <div className = "side_bar" style = { style.side_bar }>
                    <div className="user">
                        <img src={user.avatar} style = {{width:50,height:50}}/>
                        <span>{ user.username }</span>
                    </div>
                    <div>
                        { }
                    </div>
                </div>
                <div style = { style.content }>
                    <MessageBox style = {style.msgBox} message = { message }/>
                    <InputBox style= {style.inputBox} handleSendMessage = { handleSendMessage } user = { user }/>
                </div>
            </container>
        )
    }
}
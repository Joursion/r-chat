'use strict';

import React, { Component, ProTypes } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends Component {
    render() {
        let { handleLogout, isLogin } = this.props;
        return (
            <div>
                <nav className="navbar">
                    <IndexLink to = "/">Home</IndexLink>
                    <IndexLink to = "/about">About</IndexLink>
                    {
                        isLogin ? 
                        <IndexLink to = "/logout">Logout</IndexLink> :
                        <div>
                            <IndexLink to = "/login">Login</IndexLink>
                            <IndexLink to = "/register">register</IndexLink>
                        </div>
                    }
                </nav>
            </div>
        )
    }
}
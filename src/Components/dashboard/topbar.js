import React, { Component } from 'react';

import "./topbar.scss";
export default class Topbar extends Component {
    render() {
        return (
            <div className="topbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        talkItOut
                     </a>

                    <div className="navbar-logout">
                        <a className="nav-link" href="#">
                            Logout
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}  
import React, { Component } from 'react';
import Topbar from "./topbar";
import Home from "./home";

import "./dashboard.scss";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Topbar />
                <Home />
            </div>
        );
    }
}  
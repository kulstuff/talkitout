import React, { Component } from 'react';
import Topbar from "../dashboard/topbar";
import Leftbar from "../dashboard/leftbar";


export default class Dashboard extends Component {
    render() {
        return (
            <div className="">
                <Topbar />
                <Leftbar />
            </div>
        );
    }
}  
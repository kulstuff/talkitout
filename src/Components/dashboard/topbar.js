import React, { Component } from 'react';

import "./topbar.scss";
// import "../Universal/Navbar.scss"
export default class Topbar extends Component {
    render() {
        return (
            <div className="">
                <div className=" topbar  ">
                    <a className="topbar_main" href="#">
                        talkItOut
                     </a>
                    <div className="topbar-panel">
                        <a className="topbar-link" href="#">
                            Home
                     </a>
                        <a className="topbar-link" href="#">
                            Events
                     </a>
                        <a className="topbar-link" href="#">
                            Activity Log
                     </a>

                        {/* <div className="topbar-logout"> */}
                        <a className="topbar-link" href="#">
                            {/* <ion-icon name="person"></ion-icon>
                            <ion-icon name="arrow-dropdown"></ion-icon> */}
                            Logout
                        </a>
                        {/* </div> */}
                    </div>
                </div>
            </div >
        );
    }
}  
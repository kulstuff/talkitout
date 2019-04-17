import React, { Component } from 'react';

import "./home.scss";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-stats">
                    <div className="stats-box"><p className="number">4</p>
                        <p className="number-label">Weeks</p></div>
                    <div className="stats-box"><p className="number">10</p>
                        <p className="number-label">Sessions</p></div>
                    <div className="stats-box"><p className="number">2</p>
                        <p className="number-label">Listeners</p></div>
                </div>
                <div className="home_profile">
                    <div className="home_profile-pic">

                    </div>
                    <div className="home_profile-name">
                        Daniel Schulz, 26
                    </div>
                </div>
                <button type="button" className="btn btn_placement btn-info col-2">
                    <div className="display10 text-uppercase font-weight-light">
                        <ion-icon name="create"></ion-icon> Edit Profile
              </div>
                </button>
                <div className="contact">

                </div>
                <div className="home_session">
                    <p className="session_heading">
                        Last sessions
                    </p>
                    <div className="session">
                        <div className="session_pic1">

                        </div>
                        <div className="session_text1">
                            <p className="session_text-name">
                                Jon Bellion
                            </p>
                            <p className="session_text-qualification">
                                Professional
                            </p>
                            <p className="session_text-time">
                                last call 1 week ago
                            </p>
                        </div>
                        <div className="conv conv-call ">
                            <ion-icon name="call"></ion-icon>
                            {/* <span className="conv-call-text">Call</span> */}
                        </div>
                        <div className="conv conv-view">
                            <ion-icon name="mic"></ion-icon>
                            {/* <span className="conv-view-text">View Conversation</span> */}

                        </div>

                    </div>
                    <div className="session">
                        <div className="session_pic2">

                        </div>
                        <div className="session_text2">
                            <p className="session_text-name">
                                Ted Mosby
                            </p>
                            <p className="session_text-qualification">
                                Listener
                            </p>
                            <p className="session_text-time">
                                last call 2 weeks ago
                            </p>
                        </div>
                        <div className="conv conv-call">
                            <ion-icon name="call"></ion-icon>
                        </div>
                        <div className="conv conv-view">
                            <ion-icon name="mic"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}  
import React, { Component } from 'react';

import "./leftbar.scss";
export default class Leftbar extends Component {
    render() {
        return (
            <div className="leftbar">
                <div className="box box-profile"><a href="" className="profile box-text"><div className="icon"><ion-icon name="person" ></ion-icon></div>Profile</a></div>
                <div className="box box-test"><a href="" className="test box-text"><div className="icon"><ion-icon name="clipboard"></ion-icon></div>Tests</a></div>
                <div className="box box-events"><a href="" className="events box-text"><div className="icon"><ion-icon name="pin"></ion-icon></div>Events</a></div>
                <div className="box box-notes"><a href="" className="notes box-text"><div className="icon"><ion-icon name="microphone"></ion-icon></div>Notes</a></div>
                <div className="box box-pricing"><a href="" className="pricing box-text"><div className="icon"><ion-icon name="card"></ion-icon></div>Pricing</a></div>
                {/* <ion-icon name="book"></ion-icon> */}
            </div>
        );
    }
}  
import React, { Component } from "react";
import Navbar from "../Universal/Navbar";

import "./Landing.scss";
class Landing extends Component {
  //   constructor() {
  // super(props);
  //   }
  render() {
    return (
      <div>
        <Navbar />
        <div className="jumbotron jumbotron__landing">
          <div className="display4 col-7 font-weight-bold text-uppercase">
            Get Someone To Talk to,
          </div>
          <div className="display5 col-7 font-weight-light">
            - whenever you want to !
          </div>
          <button type="button" class="btn btn-info">
            <div className="display8 text-uppercase font-weight-light">
              Start Conversation
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;

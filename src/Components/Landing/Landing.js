import React, { Component } from "react";
import Navbar from "../Universal/Navbar";

class Landing extends Component {
  //   constructor() {
  // super(props);
  //   }
  render() {
    return (
      <div>
        <Navbar />
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      </div>
    );
  }
}

export default Landing;

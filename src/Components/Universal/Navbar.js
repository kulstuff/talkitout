import React, { Component } from "react";

//Style
import "./Navbar.scss";
class Navbar extends Component {
  //   constructor() {
  // super(props);
  //   }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            talkItOut
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">
                Get Started <span class="sr-only">(current)</span>
                <ion-icon name="arrow-dropdown" />
              </a>
              <a className="nav-item nav-link" href="#">
                Blogs
              </a>
              <a className="nav-item nav-link" href="#">
                About Us
              </a>
              <a className="nav-item nav-link " href="#">
                Pricing
              </a>
            </div>
          </div>

          <div className="float-right">
            <a className="nav-link navbar-login" href="#">
              Log-In
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

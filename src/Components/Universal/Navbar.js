import React, { Component } from "react";
//Style
import "./Navbar.scss";

const toggleGetStarted = () => {
  const getStartedOpacity = document.getElementById("getStarted").style.opacity;
  console.log(getStartedOpacity);
  if (getStartedOpacity == 0)
    document.getElementById("getStarted").style.opacity = "1";
  else document.getElementById("getStarted").style.opacity = "0";
};
class Navbar extends Component {
  //   constructor() {
  // super(props);
  //   }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top animated bounceInDown">
          <a className="navbar-brand" href="#">
            talkItOut
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-item nav-link"
                href="javascript:void(0);"
                onClick={toggleGetStarted}
              >
                Get Started <span class="sr-only">(current)</span>
                <ion-icon name="arrow-dropdown" />
              </a>
              <a className="nav-item nav-link" href="#">
                Blogs
              </a>
              <a className="nav-item nav-link" href="#about-us">
                About Us
              </a>
              <a className="nav-item nav-link" href="#how-it-works">
                How It Works
              </a>
              <a className="nav-item nav-link " href="#pricing">
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

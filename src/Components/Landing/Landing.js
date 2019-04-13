import React, { Component } from "react";
import Navbar from "../Universal/Navbar";
import GetStarted from "./GetStarted";
import Numbering from "../Universal/Numbering";
import Footer from "../Universal/Footer";

import Login from "../Universal/Login";

import "./Landing.scss";

import ScrollAnimation from "react-animate-on-scroll";

class Landing extends Component {
  //   constructor() {
  // super(props);
  //   }
  render() {
    return (
      <div>
        <Navbar />
        <GetStarted />
        <ScrollAnimation animateIn="fadeIn" initiallyVisible="true">
          <div className="jumbotron jumbotron__landing">
            <div className="display4 col-7 font-weight-bold text-uppercase">
              Get Someone To Talk to,
            </div>
            <div className="display5 col-7 font-weight-light">
              - whenever you want to
            </div>
            <button type="button" className="btn btn-info col-6">
              <div className="display8 text-uppercase font-weight-light">
                Start Conversation
              </div>
            </button>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration="0.3">
          <div className="jumbotron__info clearfix" id="about-us">
            <div className="col-6 float-left  jumbotron__info--text">
              <div className="display6 font-weight-light">
                <span className="font-weight-bold color-yellow">Together</span>,
                we are the solution
              </div>
              <div className="display7 font-weight-light">
                You are not alone.{" "}
                <span className="font-weight-bold color-yellow">Ever. </span>All
                of us at TalkItOut! are here to listen to your problems and
                propose solutions
              </div>
            </div>
            <div className="col-6 float-left">
              <img
                src="./src/img/together.png"
                alt="hello"
                className=" jumbotron__info--img"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration="0.3">
          <div className="jumbotron__info clearfix">
            <div className="col-6 float-left">
              <img
                src="./src/img/lock.png"
                alt="hello"
                className=" jumbotron__info--img"
              />
            </div>
            <div className="col-6 float-left  jumbotron__info--text">
              <div className="display6 font-weight-light">
                Everything you say, is totally
                <span className="font-weight-bold color-blue">
                  {" "}
                  confidential
                </span>
              </div>
              <div className="display7 font-weight-light">
                We promise to always maintain total
                <span className="font-weight-bold color-blue ">
                  confidentialality
                </span>
                and
                <span className="font-weight-bold color-blue"> anonimity </span>
                . You can feel free to talk to us about anything you want.
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration="0.3">
          <div className="jumbotron__how-it-works clearfix" id="how-it-works">
            <div className="display5 text-center font-weight-light">
              How it works ?
            </div>
            <div className="display7 font-weight-bold text-center">
              You might be wondering how we get help you. <br />
              <span className="font-weight-normal">Heres how :</span>
            </div>
            <div className="jumbotron__how-it-works--points clearfix">
              <div className="col-6 float-left">
                <Numbering
                  number="1"
                  title="Take the Assessment"
                  text="Take our medically verified test to determine how we can help you."
                />
              </div>
              <div className="col-6 float-left">
                <Numbering
                  number="2"
                  title="Choose the Right Plan"
                  text="Choose a payment plan that suits your budget."
                />
              </div>
            </div>
            <div className="jumbotron__how-it-works--points clearfix">
              <div className="col-6 float-left">
                <Numbering
                  number="3"
                  title="Find Your Match"
                  text="  We’ll help you find the best therapist for you. "
                />
              </div>
              <div className="col-6 float-left">
                <Numbering
                  number="4"
                  title="Begin Speaking"
                  text="Start messaging your listener anytime, anywhere."
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration="0.3">
          <div className="jumbotron__pricing clearfix" id="pricing">
            <div className="display6 text-center font-weight-light">
              Pricing
            </div>
            <div className="display7 font-weight-normal text-center">
              Affordable in every respect because <br />
              <span className="font-weight-bold">your health comes first.</span>
            </div>
            <div className="col-4 float-left jumbotron__pricing--card-container">
              <div className="card">
                <img
                  className="card-img-top jumbotron__pricing--card-img"
                  src="./src/img/money.png"
                  alt="Card image cap"
                />
                <div className="card-body jumbotron__pricing--card-body">
                  <h5 className="card-title">Plan #1</h5>
                  <div className="card-text">
                    <ul>
                      <li>Random Thing 1</li>
                      <li>Random Thing 2</li>
                      <li>Random Thing 3</li>
                    </ul>
                  </div>
                  <div className="btn btn-primary">₹1800/month</div>
                </div>
              </div>
            </div>
            <div className="col-4 float-left jumbotron__pricing--card-container">
              <div className="card">
                <img
                  className="card-img-top jumbotron__pricing--card-img"
                  src="./src/img/money.png"
                  alt="Card image cap"
                />
                <div className="card-body jumbotron__pricing--card-body">
                  <h5 className="card-title">Plan #2</h5>
                  <div className="card-text">
                    <ul>
                      <li>Random Thing 1</li>
                      <li>Random Thing 2</li>
                      <li>Random Thing 3</li>
                    </ul>
                  </div>
                  <div className="btn btn-primary">₹1800/month</div>
                </div>
              </div>
            </div>
            <div className="col-4 float-left jumbotron__pricing--card-container">
              <div className="card">
                <img
                  className="card-img-top jumbotron__pricing--card-img"
                  src="./src/img/money.png"
                  alt="Card image cap"
                />
                <div className="card-body jumbotron__pricing--card-body">
                  <h5 className="card-title">Plan #3</h5>
                  <div className="card-text">
                    <ul>
                      <li>Random Thing 1</li>
                      <li>Random Thing 2</li>
                      <li>Random Thing 3</li>
                    </ul>
                  </div>
                  <div className="btn btn-primary">₹1800/month</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <Footer />
      </div>
    );
  }
}

export default Landing;

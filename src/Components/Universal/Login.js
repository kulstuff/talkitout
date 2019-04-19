import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Login.scss";

class Login extends Component {

  render() {
    return (
      <div>
        <nav className="navbar-expand-lg navbar-light fixed-top login__navbar">
          <a className="navbar-brand" href="#">
            talkItOut
          </a>
        </nav>
        <div className="card login__card col-4 clearfix">
          <div className="card-body">
            <h5 className="card-title display6 login__card--title text-center">
              talkItOut!
            </h5>
            <form className="login__form">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <a href="" className="color-yellow text-center d-block">
                Forgot Password ?
              </a>
              <button type="submit" class="btn btn-primary login__form--button">
                Submit
              </button>
              <br />
              <div className="text-center ">
                Or
                <Link to="/register">Create New Account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

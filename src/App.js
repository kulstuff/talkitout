// Basic React
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

// Styling
import "./styles/sass/main.scss";

// Components
import Home from "./Components/Foundational/Home";
import Call from "./Components/Foundational/Call";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Universal/Login";
import Register from "./Components/Universal/Register";
class App extends Component {
  state = {
    username: null,
    email: null,
    uId: null,
    status: null,
    password: null
  };

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/call" component={Call} />
            <Route path="/landing" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

//Bootstrap
// import "bootstrap";

// Styling
import "./styles/sass/main.scss";

// Components
import Home from "./Components/Home";
import Landing from "./Components/Landing/Landing";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/landing" component={Landing} />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

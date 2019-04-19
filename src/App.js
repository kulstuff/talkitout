// Basic React
import React, { Component } from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"

// Styling
import "./styles/sass/main.scss"

// Components
import Home from "./Components/Foundational/Home";
import Call from "./Components/Foundational/Call";
import Landing from "./Components/Landing/Landing";

import Dashboard from "./Components/dashboard/Dashboard"

import Login from "./Components/Universal/Login";
import Register from "./Components/Universal/Register";

// Context
import AuthContext from './Context/Auth-Context'

class App extends Component {
  
  state = {
    token: null,
    userId: null,
    typeUser: null,
    client: null,
  }

  login = (token, userId, typeUser, tokenExpiration) => {
    this.setState({token, userId, typeUser})
  }

  setClientInfo = (client) => {
    this.setState({client})
  }

  logout = () => {
    this.setState({
      token: null,
      userId: null,
      typeUser: null
    })
  }

  componentDidUpdate = () => {
    console.log('App.js updated with state: ', this.state)
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <AuthContext.Provider value= {{ token: this.state.token, typeUser: this.state.typeUser, userId: this.state.userId, client: this.state.client, setClientInfo: this.setClientInfo, login: this.login, logout: this.logout}}>
              <main>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/call" component={Call} />
                  <Route path="/landing" component={Landing} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                </Switch>
              </main>
            </AuthContext.Provider>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App

import React, { Component } from "react"

import { Link } from "react-router-dom"
import "./Login.scss"

// Material-UI
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TextField from '@material-ui/core/TextField'

// Axios
import Axios from 'axios'
import { indigo } from "@material-ui/core/colors"

// Context Access
import AuthContext from '../../Context/Auth-Context'

class Register extends Component {

  state = {
    // Default
    tabValue: 0,
    typeUser: 'user',
    token: null,
    onNextStep: false,
    // Managed
    // util
    justCondition: false
  }

  static contextType = AuthContext


  updateTabValue = (event, value) => {
    if (value == 0) {
      this.setState({
        tabValue: value,
        typeUser: 'user' 
      })
    }
    else if (value == 1) {
      this.setState({
        tabValue: value,
        typeUser: 'intern' 
      })
    }
    else if (value == 2) {
      this.setState({
        tabValue: value,
        typeUser: 'listener' 
      })
    }
    else if (value == 3) {
      this.setState({
        tabValue: value,
        typeUser: 'psychiatrist' 
      })
    }
  }

  stepChange = (e) => {
    e.preventDefault()
    if(!this.state.onNextStep) {
      this.setState({
        justCondition: true,
        onNextStep: true
      })
    }
    else {
      this.setState({
        justCondition: true,
        onNextStep: false
      })
    }
  }

  clearForm = () => {
    this.setState({
      username: undefined,
      name: undefined,
      email: undefined,
      ageGroup: undefined,
      age: undefined,
      password: undefined,
      mobile: undefined,
      address: undefined
    })
  }

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidUpdate = () => {
    console.log('Component updated with the following State: ', this.state)
    if(this.state.justCondition) {
      if (document.getElementById("signup__form-two")) {
        document.getElementById("signup__form-two").reset()
      }
      if (document.getElementById("signup__form-one")) {
        document.getElementById("signup__form-one").reset()
      }
      this.setState({
        justCondition: false
      })
    }
  }

  createTypeUser = (e) => {

    e.preventDefault()

    console.log('HERE')

    const createUserRequestBody = {
      query: `mutation {
        createUser(userInput: {name: "${this.state.name}", username: "${this.state.username}", email: "${this.state.email}", password: "${this.state.password}", age: "${this.state.age}", address: "${this.state.address}", mobile: "${this.state.mobile}"}) {
          name
        }
      }`
    }

    const createInternRequestBody = {
      query: `mutation {
        createIntern(internInput: {name: "${this.state.name}", username: "${this.state.username}", email: "${this.state.email}", password: "${this.state.password}", age: "${this.state.age}", address: "${this.state.address}", mobile: "${this.state.mobile}"}) {
          name
        }
      }`
    }

    const createListenerRequestBody = {
      query: `mutation {
        createListener(listenerInput: {name: "${this.state.name}", username: "${this.state.username}", email: "${this.state.email}", password: "${this.state.password}", age: "${this.state.age}", address: "${this.state.address}", mobile: "${this.state.mobile}"}) {
          name
        }
      }`
    }
    
    const createPsyRequestBody = {
      query: `mutation {
        createPsy(psyInput: {name: "${this.state.name}", username: "${this.state.username}", email: "${this.state.email}", password: "${this.state.password}", age: "${this.state.age}", address: "${this.state.address}", mobile: "${this.state.mobile}") {
          name
      }`
    }

    switch(this.state.typeUser) {
      case 'user': {
        Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(createUserRequestBody), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          console.log('Created the new User as: ', res)
          this.loginTypeUser()
        }).catch(err => {
          console.log('Error creating a new user', err)
        })
        break
      }
      case 'intern': {
        Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(createInternRequestBody), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          console.log('Created the new Intern as: ', res)
          this.loginTypeUser()
        }).catch(err => {
          console.log('Error creating a new intern', err)
        })
        break
      }
      case 'listener': {
        Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(createListenerRequestBody), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          console.log('Created the new Listener as: ', res)
          this.loginTypeUser()
        }).catch(err => {
          console.log('Error creating a new listener', err)
        })
        break
      }
      default: {
        throw new Error('Reached Switch Default')
      }
    }
  }

  loginTypeUser = () => {

    const loginUserRequestBody = {
      query: `{
        loginUser( method: "${this.state.username}", password: "${this.state.password}") {
          token
          userId
          typeUser
        }
      }`
    }

    const loginInternRequestBody = {
      query: `{
        loginIntern( method: "${this.state.username}", password: "${this.state.password}") {
          token
          userId
          typeUser
        }
      }`
    }
    
    const loginListenerRequestBody = {
      query: `{
        loginListener( method: "${this.state.username}", password: "${this.state.password}") {
          token
          userId
          typeUser
        }
      }`
    }

    switch(this.state.typeUser) {
      case 'user': {
        Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(loginUserRequestBody), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          if(res.status != 200 && res.status != 201) {
            // $('.react-loading').fadeOut('fast')
            // $('.react-login-error').fadeIn()
            this.setState({
                loading: false
            })
            throw new Error('Error logging in: ', res)
          }
          return res
        }).then(res => {
          console.log('Logged the new User in as: ', res)
          this.context.login(res.data.data.loginUser.token, res.data.data.loginUser.userId, res.data.data.loginUser.typeUser)
          this.getUserInfo()
          this.props.history.push('/dashboard')
        }).catch(err => {
          console.log('Error logging a new user', err)
        })
        break
      }
      case 'intern': {
        Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(loginInternRequestBody), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          console.log('Logged the new Intern in as: ', res)
          this.context.login(res.data.data.loginIntern.token, res.data.data.loginIntern.userId, res.data.data.loginIntern.typeUser)
          this.getUserInfo()
          this.props.history.push('/dashboard')
        }).catch(err => {
          console.log('Error logging a new intern', err)
        })
        break
      }
      case 'listener': {
        Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(loginListenerRequestBody), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          console.log('Logged the new Listener in as: ', res)
          this.context.login(res.data.data.loginListener.token, res.data.data.loginListener.userId, res.data.data.loginListener.typeUser)
          this.getUserInfo()
          this.props.history.push('/dashboard')
        }).catch(err => {
          console.log('Error logging a new listener', err)
        })
        break
      }
      default: {
        throw new Error('Reached Switch Default')
      }
    }
  }

  getUserInfo = () => {
    
    const getUserInfoRequestBody = {
      query: `{
          ${this.context.typeUser}{
              name
              username
              age
          }
      }`
    }

    Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(getUserInfoRequestBody), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.context.token
        }
    }).then(res => {
        console.log('User Object: ', res.data.data[this.context.typeUser])
        this.context.setClientInfo(res.data.data[this.context.typeUser])
        this.props.history.push('/dashboard')
    }).catch(err => {
        console.log('Error getting the user information: ', err)
    })

  }

  render() {

    const registerForm = (
      <React.Fragment>
        {
          this.state.onNextStep ? (
            <React.Fragment>
            <form className="login__form" id='signup__form-two'>
              <div class="form-group">
                
                <TextField
                  id="filled-email-input"
                  label="Age"
                  style = {{width: '80%', marginLeft: '10%'}}
                  className='signupform-age'
                  type="text"
                  name="age"
                  onChange={this.handleFormChange}
                  autoComplete="email"
                  margin="normal"
                  variant="filled"
                />
                
                <TextField
                  id="filled-email-input"
                  label="Mobile Number"
                  style = {{width: '80%', marginLeft: '10%'}}
                  className='signupform-mobile'
                  type="text"
                  name="mobile"
                  className='mobile'
                  onChange={this.handleFormChange}
                  autoComplete="email"
                  margin="normal"
                  variant="filled"
                />

                <TextField
                  id="filled-password-input"
                  label="Address"
                  name='address'
                  onChange={this.handleFormChange}
                  style = {{width: '80%', marginLeft: '10%'}}
                  className='signupform-address'
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="filled"
                />

              </div>
              <button className="btn btn-primary login__form--button" onClick={this.stepChange}>
                Go Back
              </button>
              <button className="btn btn-primary login__form--button" onClick={this.createTypeUser}>
                Signup
              </button>
              </form>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <form className="login__form" id='signup__form-one'>
              <div class="form-group">

                <TextField
                  id="filled-email-input"
                  label="Name"
                  style = {{width: '80%', marginLeft: '10%'}}
                  className='signupform-name'
                  type="text"
                  name="name"
                  autoComplete="name"
                  onChange={this.handleFormChange}
                  margin="normal"
                  variant="filled"
                />
                
                <TextField
                  id="filled-email-input"
                  label="Email"
                  style = {{width: '80%', marginLeft: '10%'}}
                  className='signupform-email'
                  type="email"
                  name="email"
                  autoComplete="email"
                  onChange={this.handleFormChange}
                  margin="normal"
                  variant="filled"
                />
                
                <TextField
                  id="filled-email-input"
                  label="Username"
                  style = {{width: '80%', marginLeft: '10%'}}
                  className='signupform-username'
                  type="text"
                  name="username"
                  autoComplete="email"
                  onChange={this.handleFormChange}
                  margin="normal"
                  variant="filled"
                />

                <TextField
                  id="filled-password-input"
                  label="Password"
                  name='password'
                  style = {{width: '80%', marginLeft: '10%'}}
                  className='signupform-password'
                  type="password"
                  onChange={this.handleFormChange}
                  autoComplete="current-password"
                  margin="normal"
                  variant="filled"
                />

                <TextField
                  id="filled-password-input"
                  label="Confirm Password"
                  style = {{width: '80%', marginLeft: '10%'}}
                  className='signupform-password'
                  type="password"
                  name='confirm-password'
                  onChange={this.handleFormChange}
                  autoComplete="current-password"
                  margin="normal"
                  variant="filled"
                />

              </div>
              <button class="btn btn-primary login__form--button" onClick={this.stepChange}>
                Continue
              </button>
              </form>
            </React.Fragment>
          )
        }
        <br />
        <div className="text-center ">
          Or <Link to="/login">Login</Link>
        </div>
      </React.Fragment>
    )

    return (
      <React.Fragment>
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
            </div>
            {
              registerForm
            }
            <Paper square>
              <Tabs
                value={this.state.tabValue}
                variant='fullWidth'
                indicatorColor="primary"
                textColor="primary"
                onChange={this.updateTabValue}
              >
                <Tab label="User"/>
                <Tab label="Intern"/>
                <Tab label="Listener"/>
                <Tab label="Psychiatrist"/>
              </Tabs>
            </Paper>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Register

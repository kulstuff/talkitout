// Basic Functionality
import React, { Component } from 'react'

// Material - UI
import Switch from '@material-ui/core/Switch';

import "./home.scss";

// Axios
import Axios from 'axios'

// App Auth Context
import AuthContext from '../../Context/Auth-Context'
import { Button } from '@material-ui/core'

export default class Home extends Component {

    static contextType = AuthContext

    state = {
        name: null,
        username: null,
        email: null,
        age: null,
        mobile: null,
        address: null,
        purpose: 'test'
    }

    componentWillMount = () => {
        // this.getUserInfo()
    }

    componentDidUpdate = () => {
        console.log('State of the Dashboard component has changed: ', this.state, 'with Context: ', this.context)
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    startFlow = () => {
        // Init
        // Find a Executive
        if (this.state.purpose) {
            const findExecutiveRequestBody = {
                query: `{
                    findExecutive(purpose: "${this.state.purpose}"){
                        intern
                    }
                }`
            }
            Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(findExecutiveRequestBody), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.context.token
                }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    handleInternAvailibilitySwitch = (event) => {

        const makeTheInternAvailableRequestBody = {
            query: `
                mutation {makeTheInternAvailable}
            `
        }

        const makeTheInternUnavailableRequestBody = {
            query: `
                mutation {makeTheInternUnavailable}
            `
        }

        console.log('Intern availibilty: ', event.target.checked)
        if(event.target.checked) {
            Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(makeTheInternAvailableRequestBody), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.context.token
                }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
        else {
            Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(makeTheInternUnavailableRequestBody), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.context.token
                }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }

    }

    render() {
        
        const userDash = (
            <React.Fragment>
                <div className="home-stats">
                    <div className="stats-box"><p className="number">4</p>
                        <p className="number-label">Weeks</p></div>
                    <div className="stats-box"><p className="number">10</p>
                        <p className="number-label">Sessions</p></div>
                    <div className="stats-box"><p className="number">2</p>
                        <p className="number-label">Listeners</p></div>
                </div>
                <div className="home_profile">
                    <div className="home_profile-pic">

                    </div>
                    <div className="home_profile-name">
                        {this.context.client ? (this.context.client.name) : (null)}
                    </div>
                </div>
                <button type="button" className="btn btn_placement btn-info col-2">
                    <div className="display10 text-uppercase font-weight-light">
                        <ion-icon name="create"></ion-icon> Edit Profile
                    </div>
                </button>
                <div className="contact">

                </div>
                <div className='home_session_container'>
                    <div className="home_session">
                        <p className="session_heading">
                            Last sessions
                        </p>
                        <div className="session">
                            <div className="session_pic1">

                            </div>
                            <div className="session_text1">
                                <p className="session_text-name">
                                    Jon Bellion
                                </p>
                                <p className="session_text-qualification">
                                    Professional
                                </p>
                                <p className="session_text-time">
                                    last call 1 week ago
                                </p>
                            </div>
                            <div className="conv conv-call ">
                                <ion-icon name="call"></ion-icon>
                            </div>
                            <div className="conv conv-view">
                                <ion-icon name="mic"></ion-icon>

                            </div>

                        </div>
                        <div className="session">
                            <div className="session_pic2">

                            </div>
                            <div className="session_text2">
                                <p className="session_text-name">
                                    Ted Mosby
                                </p>
                                <p className="session_text-qualification">
                                    Listener
                                </p>
                                <p className="session_text-time">
                                    last call 2 weeks ago
                                </p>
                            </div>
                            <div className="conv conv-call">
                                <ion-icon name="call"></ion-icon>
                            </div>
                            <div className="conv conv-view">
                                <ion-icon name="mic"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div className="home_session">
                        <p className="session_heading">
                            Last sessions
                        </p>
                        <div className="session">
                            <div className="session_pic1">

                            </div>
                            <div className="session_text1">
                                <p className="session_text-name">
                                    Jon Bellion
                                </p>
                                <p className="session_text-qualification">
                                    Professional
                                </p>
                                <p className="session_text-time">
                                    last call 1 week ago
                                </p>
                            </div>
                            <div className="conv conv-call ">
                                <ion-icon name="call"></ion-icon>
                            </div>
                            <div className="conv conv-view">
                                <ion-icon name="mic"></ion-icon>

                            </div>

                        </div>
                        <div className="session">
                            <div className="session_pic2">

                            </div>
                            <div className="session_text2">
                                <p className="session_text-name">
                                    Ted Mosby
                                </p>
                                <p className="session_text-qualification">
                                    Listener
                                </p>
                                <p className="session_text-time">
                                    last call 2 weeks ago
                                </p>
                            </div>
                            <div className="conv conv-call">
                                <ion-icon name="call"></ion-icon>
                            </div>
                            <div className="conv conv-view">
                                <ion-icon name="mic"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home_call'>
                    <div className='home_call_box'>
                        <button onClick={this.startFlow}>Yes</button>
                        <Button onClick={() => {}}>Reset</Button>
                    </div>
                </div>
            </React.Fragment>
        )
        
        const internDash = (
            <React.Fragment>
                <div className="home-stats">
                    <div className="stats-box"><p className="number">4</p>
                        <p className="number-label">Weeks</p></div>
                    <div className="stats-box"><p className="number">10</p>
                        <p className="number-label">Sessions</p></div>
                    <div className="stats-box"><p className="number">2</p>
                        <p className="number-label">Listeners</p></div>
                </div>
                <div className="home_profile">
                    <div className="home_profile-pic">

                    </div>
                    <div className="home_profile-name">
                        {this.context.client ? (this.context.client.name) : (null)}
                    </div>
                </div>
                <button type="button" className="btn btn_placement btn-info col-2">
                    <div className="display10 text-uppercase font-weight-light">
                        <ion-icon name="create"></ion-icon> Edit Profile
                    </div>
                </button>
                <div className="contact">

                </div>
                
                <div className='home_session_container'>
                    <div className="home_session">
                        <p className="session_heading">
                            Last sessions
                        </p>
                        <div className="session">
                            <div className="session_pic1">

                            </div>
                            <div className="session_text1">
                                <p className="session_text-name">
                                    Jon Bellion
                                </p>
                                <p className="session_text-qualification">
                                    Professional
                                </p>
                                <p className="session_text-time">
                                    last call 1 week ago
                                </p>
                            </div>
                            <div className="conv conv-call ">
                                <ion-icon name="call"></ion-icon>
                            </div>
                            <div className="conv conv-view">
                                <ion-icon name="mic"></ion-icon>

                            </div>

                        </div>
                        <div className="session">
                            <div className="session_pic2">

                            </div>
                            <div className="session_text2">
                                <p className="session_text-name">
                                    Ted Mosby
                                </p>
                                <p className="session_text-qualification">
                                    Listener
                                </p>
                                <p className="session_text-time">
                                    last call 2 weeks ago
                                </p>
                            </div>
                            <div className="conv conv-call">
                                <ion-icon name="call"></ion-icon>
                            </div>
                            <div className="conv conv-view">
                                <ion-icon name="mic"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div className="home_session">
                        <p className="session_heading">
                            Last sessions
                        </p>
                        <div className="session">
                            <div className="session_pic1">

                            </div>
                            <div className="session_text1">
                                <p className="session_text-name">
                                    Jon Bellion
                                </p>
                                <p className="session_text-qualification">
                                    Professional
                                </p>
                                <p className="session_text-time">
                                    last call 1 week ago
                                </p>
                            </div>
                            <div className="conv conv-call ">
                                <ion-icon name="call"></ion-icon>
                            </div>
                            <div className="conv conv-view">
                                <ion-icon name="mic"></ion-icon>

                            </div>

                        </div>
                        <div className="session">
                            <div className="session_pic2">

                            </div>
                            <div className="session_text2">
                                <p className="session_text-name">
                                    Ted Mosby
                                </p>
                                <p className="session_text-qualification">
                                    Listener
                                </p>
                                <p className="session_text-time">
                                    last call 2 weeks ago
                                </p>
                            </div>
                            <div className="conv conv-call">
                                <ion-icon name="call"></ion-icon>
                            </div>
                            <div className="conv conv-view">
                                <ion-icon name="mic"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home_call'>
                    <div className='home_call_box'>
                        <Switch onChange={this.handleInternAvailibilitySwitch}></Switch>
                        <Button onClick={() => {}}>Reset</Button>
                    </div>
                </div>
            </React.Fragment>
        )
        
        const listenerDash = (
            <React.Fragment>
                
            </React.Fragment>
        )

        const message = (
            <div className='component-message'>
                {this.state.message}
            </div>
        )

        return (
            <div className="home">
                {
                    this.context.typeUser == 'user' ? (
                        userDash
                    ) : (
                        this.context.typeUser == 'intern' ? (
                            internDash
                        ) : (
                            this.context.typeUser == 'listener' ? (
                                listenerDash
                            ) : (
                                <div className='react-unauth-container'>
                                    <div className='react-unauth'>
                                        Sorry, But you should be logged in to view this particular section
                                    </div>
                                </div>
                            )
                        )
                    )
                }
            </div>

        );
    }
}  
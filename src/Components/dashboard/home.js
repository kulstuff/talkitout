// Basic Functionality
import React, { Component } from 'react'

// Material - UI
import Switch from '@material-ui/core/Switch'
import { Button } from '@material-ui/core'

// Styling
import "./home.scss";

// Axios
import Axios from 'axios'

// App Auth Context
import AuthContext from '../../Context/Auth-Context'
import Call from '../Foundational/Call';

export default class Home extends Component {

    static contextType = AuthContext

    state = {
        purpose: 'test',
        keepAsking: null,
        request: null,
        message: null,
        showAlertDialog: true,
        status: 'docked',
        loading: false,
        secret: null
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
                this.setState({keepAsking: true})
                this.keepAsking()
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
                this.setState({keepAsking: false})
            }).catch(err => {
                console.log(err)
            })
        }

    }

    keepAsking = () => {
        const checkForRequestByInternRequestBody = {
            query: `{
               checkForRequestByIntern
            }`
        }
        console.log('Listening for Requests');
        if(this.state.keepAsking) {
            Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(checkForRequestByInternRequestBody), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.context.token
                }
            }).then(res => {
                console.log('Listening for new requests: ', res.data.data.checkForRequestByIntern)
                if (res.data.data.checkForRequestByIntern == 'Request Received') {
                    // Mark the Intern Busy and show the Dialog
                    this.markInternBusy()
                    // The Latter function should be made a callback of the former
                    this.recievedRequest()
                }
                else {
                    setTimeout(this.keepAsking, 1000)
                }
            }).catch(err => {
                console.log('Error Listening to new request Please Refresh: ', err)
                // Show must go on
                setTimeout(this.keepAsking, 1000)
            })
        }
    }

    markInternBusy = () => {
        const makeInternBusyRequestBody = {
            query: `mutation {
                makeInternBusy
            }`
        }
        Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(makeInternBusyRequestBody), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.context.token
            }
        }).then(res => {
            console.log('Listening for new requests: ', res.data.data.makeInternBusy)
        }).catch(err => {
            console.log('Error Listening to new request Please Refresh: ', err)
        })
    }

    recievedRequest = () => {
        const getRequestRequestBody = {
            query: `{
                getRequest {
                    purpose
                }
            }`
        }
        console.log('Request Recieved')
        this.setState({keepAsking: false})
        Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(getRequestRequestBody), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.context.token
            }
        }).then(res => {
            console.log('Listening for new requests: ', res)
            this.showInternRequestDialog()
        }).catch(err => {
            console.log('Error getting the commited request: ', err)
        })
    }

    showInternRequestDialog = () => {
        this.setState({showAlertDialog: true})
    }

    disperseDialog = () => {
        // console.log('SET');
        this.setState({showAlertDialog: false})
    }

    startInternSession = () => {

    }

    render() {
        
        const userDash = (
            <React.Fragment>
                { this.state.loading && <div className='loading'>
                    <div class="spinner spinner-components">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                </div> }
                { this.state.status == 'onCall' && this.state.secret && <div>
                    <Call secret={this.state.secret}/>
                </div> }
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
                { this.state.showAlertDialog && <div className='alert_dialog'>
                    <div className='alert_dialog_container'>
                        <div className='alert_dialog_text'>You have a new Call. Answer?</div>
                        <div className='alert_dialog_btn-wrap'>
                            <Button className='alert_dialog_btn'>Yes</Button>
                            <Button className='alert_dialog_btn'>No</Button>
                        </div>
                    </div>
                </div> }
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
            <React.Fragment>
                { this.state.showAlertDialog && <div className='alert_dialog'>
                    <div className='alert_dialog_container'>
                        <div className='alert_dialog_text'>You have a new call. Answer?</div>
                        <div className='alert_dialog_btn-wrap'>
                            <Button variant='outlined' color='primary' className='alert_dialog_btn' onClick={this.startInternSession}>Yes</Button>
                            <Button variant='outlined' color='secondary'  className='alert_dialog_btn' onClick={this.disperseDialog}>No</Button>
                        </div>
                    </div>
                </div> }
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
            </React.Fragment>

        );
    }
}  
// Basic Functionality
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// FIrebae Signalling
import Firebase from 'firebase'
import Axios from 'axios'

// Get Context
import AuthContext from '../../Context/Auth-Context'

class Call extends Component {

    state = {
        caller: {},
        reciepent: {},
        secret: null,
        purpose: 'test',
        duration: null,
        onhold: false,
        oncall: false,
        status: null
    }

    config = {
        apiKey: "AIzaSyDa4cc_QgvCpAsFKtbScYyHD7S9fZpKaPY",
        authDomain: "talkitout-3f3b7.firebaseapp.com",
        databaseURL: "https://talkitout-3f3b7.firebaseio.com",
        projectId: "talkitout-3f3b7",
        storageBucket: "talkitout-3f3b7.appspot.com",
        messagingSenderId: "206647692136"
    };

    yourId
    pc = {}

    database;

    static contextType = AuthContext

    componentDidMount = () => {
        
        if(true && this.props.secret) {
            console.log('Seeking with props: ', this.props)
            var servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'}, {'urls': 'turn:numb.viagenie.ca','credential': this.props.secret,'username': 'talkitout.kulstuff@gmail.com'}]};
            
            this.pc = new RTCPeerConnection(servers)
            
            this.config = {
                apiKey: "AIzaSyDa4cc_QgvCpAsFKtbScYyHD7S9fZpKaPY",
                authDomain: "talkitout-3f3b7.firebaseapp.com",
                databaseURL: "https://talkitout-3f3b7.firebaseio.com",
                projectId: "talkitout-3f3b7",
                storageBucket: "talkitout-3f3b7.appspot.com",
                messagingSenderId: "206647692136"
            }
            
            this.yourId = Math.floor(Math.random()*1000000000);
            var yourVideo = document.getElementById('yourVideo')
            var friendsVideo = document.getElementById('friendsVideo')
            
            navigator.mediaDevices.getUserMedia({audio:true, video:true})
                .then(stream => yourVideo.srcObject = stream)
                .then(stream => this.pc.addStream(stream));
            console.log('myVideo Object: ', yourVideo);
            Firebase.initializeApp(this.config);
            
            console.log('Component Did Mount PC: ', this.pc);
            this.database = Firebase.database().ref();
            //Create an account on Viagenie (http://numb.viagenie.ca/), and replace {'urls': 'turn:numb.viagenie.ca','credential': 'websitebeaver','username': 'websitebeaver@email.com'} with the information from your account
            this.pc.onicecandidate = (event => event.candidate?this.sendMessage(this.yourId, JSON.stringify({'ice': event.candidate})):console.log("Sent All Ice") );
            this.pc.onaddstream = (event => friendsVideo.srcObject = event.stream);

            this.database.on('child_added', this.readMessage);
        }
    }

    // componentDidMount = () => {
    //     //Create an account on Firebase, and use the credentials they give you in place of the following 

    
    sendMessage = (senderId, data) => {
        var msg = this.database.push({ sender: senderId, message: data });
        msg.remove();
        console.log('Reaches Here')
    }

    readMessage = (data) => {
        var msg = JSON.parse(data.val().message);
        var sender = data.val().sender;
        if (sender != this.yourId) {
            if (msg.ice != undefined)
                this.pc.addIceCandidate(new RTCIceCandidate(msg.ice));
            else if (msg.sdp.type == "offer")
                this.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
                .then(() => this.pc.createAnswer())
                .then(answer => this.pc.setLocalDescription(answer))
                .then(() => this.sendMessage(this.yourId, JSON.stringify({'sdp': this.pc.localDescription})));
            else if (msg.sdp.type == "answer")
                this.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
        }
        console.log('Reaches Here')
    }

    // }
    
    showFriendsFace = () => {
        this.pc.createOffer()
            .then(offer => this.pc.setLocalDescription(offer) )
            .then(() => this.sendMessage(this.yourId, JSON.stringify({'sdp': this.pc.localDescription})) );
    }

    // startFlow = () => {
    //     // Init
    //     // Find a Executive
    //     if (this.state.purpose) {
    //         const findExecutiveRequestBody = {
    //             query: `{
    //                 findExecutive(purpose: "${this.state.purpose}"){
    //                     listener
    //                 }
    //             }`
    //         }
    //         Axios.post('https://talkitout-backend.herokuapp.com/graphql', JSON.stringify(findExecutiveRequestBody), {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer ' + this.context.token
    //             }
    //         }).then(res => {
    //             console.log(res)
    //         }).catch(err => {
    //             console.log(err)
    //         })
    //     }
    // }

    render () {
        return(
            <div className='home'>
                    Home
                <div className='wish'>
                    Do You wish to Talk to Our Executives?
                </div>
                <button onClick={this.startFlow}>Yes</button>
                <button><Link to='/landing'>No</Link></button>
                <video id="yourVideo" autoPlay muted playsInline></video>
                <video id="friendsVideo" autoPlay playsInline></video>
                <br />
                <button onClick={this.showFriendsFace} type="button" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-facetime-video" aria-hidden="true"></span> Call</button>
            </div>
        )
    }

    // render() {
    //     return(

    //         <div className='call'>
    //             <div className='call-centric'>
    //                 <div className='call-centric-information-head'>

    //                 </div>
    //                 <div className='call-centric-interface'>

    //                 </div>
    //                 <div className='call-centric-information-tali'>

    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}

export default Call
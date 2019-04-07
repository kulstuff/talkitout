import React, { Component } from 'react';
import Firebase from 'firebase';


class Home extends Component {

    config = {
        apiKey: "AIzaSyDa4cc_QgvCpAsFKtbScYyHD7S9fZpKaPY",
        authDomain: "talkitout-3f3b7.firebaseapp.com",
        databaseURL: "https://talkitout-3f3b7.firebaseio.com",
        projectId: "talkitout-3f3b7",
        storageBucket: "talkitout-3f3b7.appspot.com",
        messagingSenderId: "206647692136"
    };

    yourId = Math.floor(Math.random()*1000000000);
    pc = {};

    componentDidMount = () => {
        var servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'}, {'urls': 'turn:numb.viagenie.ca','credential': 'beaver','username': 'webrtc.websitebeaver@gmail.com'}]};
        this.pc = new RTCPeerConnection(servers);
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
        var database = Firebase.database().ref();
        //Create an account on Viagenie (http://numb.viagenie.ca/), and replace {'urls': 'turn:numb.viagenie.ca','credential': 'websitebeaver','username': 'websitebeaver@email.com'} with the information from your account
        this.pc.onicecandidate = (event => event.candidate?this.sendMessage(this.yourId, JSON.stringify({'ice': event.candidate})):console.log("Sent All Ice") );
        this.pc.onaddstream = (event => friendsVideo.srcObject = event.stream);

        database.on('child_added', this.readMessage);
    }

    // componentDidMount = () => {
    //     //Create an account on Firebase, and use the credentials they give you in place of the following 

    
    sendMessage = (senderId, data) => {
        var msg = database.push({ sender: senderId, message: data });
        msg.remove();
        console.log('Reaches Here');
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
        console.log('Reaches Here');
    };

    // }
    
    showFriendsFace = () => {
        this.pc.createOffer()
            .then(offer => this.pc.setLocalDescription(offer) )
            .then(() => this.sendMessage(this.yourId, JSON.stringify({'sdp': this.pc.localDescription})) );
    }

    render () {
        return(
            <div className='home'>
                Home            
                <video id="yourVideo" autoPlay muted playsInline></video>
                <video id="friendsVideo" autoPlay playsInline></video>
                <br />
                <button onClick={this.showFriendsFace} type="button" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-facetime-video" aria-hidden="true"></span> Call</button>
            </div>
        )
    }
}

export default Home;

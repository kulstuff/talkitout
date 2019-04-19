import React, { Component } from "react";
import Calendar from "./dashboard_moodcalendar";

class Mood extends Component {
  state = {
    date: null,
    emotion: null
  };

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleEmotion = e => {
    this.setState({
      emotion: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  componentDidUpdate = () => {
    console.log("State of the calendar changed to: ", this.state);
  };

  render() {
    return (
      <div>
        <Calendar emotion={this.state.emotion} />
      </div>
    );
  }
}

export default Mood;

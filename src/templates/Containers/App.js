import React, { Component } from 'react';
import ChatWindow from '../Presentation/ChatWindow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatLog: [],
      activity: {
        userA: false,
        userB: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  handleSubmit(value) {
    const currentLog = this.state.chatLog;
    currentLog.push(value);
    this.setState({
      chatLog: currentLog
    });
  }

  handleType(data) {
    const currentActivity = this.state.activity;
    currentActivity[data.user] = data.status;
    this.setState({
      activity: currentActivity
    });
  }

  render() {
    return (
      <div id="windowWrap">
        <ChatWindow
          handleSubmit={this.handleSubmit}
          handleType={this.handleType}
          log={this.state.chatLog}
          user="userA"
          activity={this.state.activity}
        />
        <ChatWindow
          handleSubmit={this.handleSubmit}
          handleType={this.handleType}
          log={this.state.chatLog}
          user="userB"
          activity={this.state.activity}
        />
      </div>
    );
  }
}

export default App;

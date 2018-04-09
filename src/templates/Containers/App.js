import React, { Component } from 'react';
import ChatWindow from '../Presentation/ChatWindow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatLog: [],
      activity: []
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
    let currentActivity = this.state.activity;
    currentActivity.indexOf(data);
    switch (data.action) {
      case 'add':
        // check if the username is already on the list, if so don't add
        if (currentActivity.indexOf(data.user) === -1) {
          currentActivity.push(data.user);
        }
        break;

      case 'remove':
        // check if the username is NOT on the list, if so don't remove, duh
        if (currentActivity.indexOf(data.user) !== -1) {
          currentActivity.splice(currentActivity.indexOf(data.user), 1);
        }
        break;

      default:
        return false;
    }

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

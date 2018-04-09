import React, { Component } from 'react';
import ChatWindow from '../Presentation/ChatWindow';

import moment from 'moment';

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
    const currentLog = Array.from(this.state.chatLog);

    // Build the archetypal new value object
    // Make it a let because it's likely to be swapped for a reash of the previous entry
    // The point of this is to transform the initial output into an array
    let newValue = {
      user: value.user,
      timestamp: value.timestamp,
      content: [value.content]
    };

    // Let's check that the previous message was from the same user
    const lastEntry = currentLog.slice(-1)[0];
    // and that it's been done within the same minute (because nobody wants to read longform essays unbroken by timestamps)
    const lastEntryTimeFits = lastEntry
      ? moment(lastEntry.timestamp).format('DD MM YY H m') ===
        moment(value.timestamp).format('DD MM YY H m')
      : false;
    // If both conditions are met, we do not add a new line to the array, but we feed the last one the fresher info
    // That object then takes the place of the newEntry variable and eventually is fed to the state
    if (lastEntry && lastEntry.user === value.user && lastEntryTimeFits) {
      lastEntry.content.push(value.content);
      currentLog.pop();
      newValue = lastEntry;
    }

    currentLog.push(newValue);

    this.setState({
      chatLog: currentLog
    });
  }

  handleType(data) {
    let currentActivity = Array.from(this.state.activity);
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

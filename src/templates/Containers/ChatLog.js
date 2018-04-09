import React, { Component } from 'react';

class ChatLog extends Component {
  render() {
    return (
      <div className="chatLog">
        <div className="messagesZone" />
        <div className="activityZone" />
      </div>
    );
  }
}

export default ChatLog;

import React, { Component } from 'react';

class ChatLog extends Component {
  render() {
    // Checking activity prop for keys that are not equal to the current user
    // then getting their boolean valye
    // then using this to display or hide the activity message
    const currentlyActive = Object.keys(this.props.activity)
      .filter(value => value !== this.props.user)
      .map(obj => {
        const messageVariables = {
          userName: obj,
          status: this.props.activity[obj]
        };
        return messageVariables;
      })[0];

    return (
      <div className="chatLog">
        <div className="messagesZone" />
        <div className="activityZone">
          {currentlyActive.status ? (
            <p>{currentlyActive.userName} est en train d'écrire...</p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ChatLog;

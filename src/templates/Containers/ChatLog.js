import React, { Component } from 'react';

class ChatLog extends Component {
  render() {
    // Checking activity prop for values that are not equal to the current user
    // then using this to display or hide the activity message
    const currentlyActive = this.props.activity.filter(
      value => value !== this.props.user
    );

    return (
      <div className="chatLog">
        <div className="messagesZone" />
        <div className="activityZone">
          {currentlyActive.length > 0 ? (
            <p>
              {currentlyActive.map(name => name)}{' '}
              {currentlyActive.length > 1 ? 'sont' : 'est'} en train d'écrire...
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ChatLog;

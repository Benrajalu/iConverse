import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LogEntry from '../Presentation/LogEntry';

class ChatLog extends Component {
  render() {
    // Checking activity prop for values that are not equal to the current user
    // then using this to display or hide the activity message
    const currentlyActive = this.props.activity.filter(
      value => value !== this.props.user
    );

    // Looping on the log props to display the messages using a presentational component.
    // Will aslo use a ref to scroll that component into view
    const messages = this.props.log.map((item, index) => (
      <LogEntry
        value={item}
        originalAuthor={item.user === this.props.user}
        key={`log-${index}`}
      />
    ));

    return (
      <div className="chatLog">
        <div className="messagesZone">{messages}</div>
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

ChatLog.propTypes = {
  user: PropTypes.string.isRequired,
  log: PropTypes.array.isRequired,
  activity: PropTypes.array.isRequired
};

export default ChatLog;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LogEntry from '../Presentation/LogEntry';

class ChatLog extends Component {
  logRef = React.createRef();

  shouldComponentUpdate(nextProps) {
    return nextProps.log !== this.props.log;
  }

  componentDidUpdate() {
    this.logRef.current.scrollTop = this.logRef.current.scrollHeight;
  }

  render() {
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
      <div className="window_log" ref={this.logRef}>
        {messages}
      </div>
    );
  }
}

ChatLog.propTypes = {
  user: PropTypes.string.isRequired,
  log: PropTypes.array.isRequired
};

export default ChatLog;

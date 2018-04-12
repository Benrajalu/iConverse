import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LogEntry from '../Presentation/LogEntry';

import LogContext from '../../Context';

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
    return (
      <div className="window_log" ref={this.logRef}>
        <LogContext.Consumer>
          {log =>
            log.map((item, index) => (
              <LogEntry
                value={item}
                originalAuthor={item.user === this.props.user}
                key={`log-${index}`}
              />
            ))
          }
        </LogContext.Consumer>
      </div>
    );
  }
}

ChatLog.propTypes = {
  user: PropTypes.string.isRequired
};

export default ChatLog;

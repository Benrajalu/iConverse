import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LogEntry extends Component {
  render() {
    return (
      <div
        className={
          this.props.originalAuthor ? 'logEntry authored' : 'logEntry'
        }>
        <p className="author">
          {this.props.value ? this.props.value.user : null}
        </p>
        <p className="content">
          {this.props.value ? this.props.value.content : null}
        </p>
        <p className="timestamp">
          {this.props.value ? this.props.value.timestamp : null}
        </p>
      </div>
    );
  }
}

LogEntry.propTypes = {
  value: PropTypes.object.isRequired,
  originalAuthor: PropTypes.bool.isRequired
};

export default LogEntry;

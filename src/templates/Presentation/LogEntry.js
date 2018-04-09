import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment/locale/fr';

class LogEntry extends Component {
  render() {
    moment.locale('fr');
    return (
      <div
        className={
          this.props.originalAuthor ? 'logEntry authored' : 'logEntry'
        }>
        <p className="author">{this.props.value.user}</p>
        <div className="content">{this.props.value.content}</div>
        <p className="timestamp">
          {moment(this.props.value.timestamp).calendar()}
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

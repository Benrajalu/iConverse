import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

class LogEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        opacity: 0,
        transform: `translateX(${this.props.originalAuthor ? '50%' : '-50%'})`
      }
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        style: {
          opacity: 1,
          transform: 'translateX(0%)'
        }
      });
    }, 100);
  }
  render() {
    return (
      <div
        className={
          this.props.originalAuthor ? 'log_entry authored' : 'log_entry'
        }
        style={this.state.style}>
        <div className="authorship">
          <p className="author">{this.props.value.user}</p>
          <p className="timestamp">
            {moment(this.props.value.timestamp).calendar()}
          </p>
        </div>
        <div className="content">
          {this.props.value.content.map((value, index) => (
            <p key={`logEntry-${index}`}>{value}</p>
          ))}
        </div>
      </div>
    );
  }
}

LogEntry.propTypes = {
  value: PropTypes.object.isRequired,
  originalAuthor: PropTypes.bool.isRequired
};

export default LogEntry;

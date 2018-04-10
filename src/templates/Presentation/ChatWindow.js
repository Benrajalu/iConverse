import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChatLog from '../Containers/ChatLog';
import ChatInput from '../Containers/ChatInput';

class ChatWindow extends Component {
  render() {
    return (
      <div className={`window ${this.props.isActive ? 'active' : ''}`}>
        <div className="window_title">{this.props.user}</div>
        <div className="window_content">
          <ChatLog log={this.props.log} user={this.props.user} />
          <ChatInput
            user={this.props.user}
            handleSubmit={this.props.handleSubmit}
            handleType={this.props.handleType}
            activity={this.props.activity}
          />
        </div>
      </div>
    );
  }
}

ChatWindow.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleType: PropTypes.func.isRequired,
  log: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
  activity: PropTypes.array.isRequired
};

export default ChatWindow;

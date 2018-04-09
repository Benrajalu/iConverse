import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChatLog from '../Containers/ChatLog';
import ChatInput from '../Containers/ChatInput';

class ChatWindow extends Component {
  render() {
    return (
      <div className="chatWindow">
        <ChatLog
          log={this.props.log}
          user={this.props.user}
          activity={this.props.activity}
        />
        <ChatInput
          user={this.props.user}
          handleSubmit={this.props.handleSubmit}
          handleType={this.props.handleType}
        />
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

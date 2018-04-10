import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChatLog from '../Containers/ChatLog';
import ChatInput from '../Containers/ChatInput';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    // The removal of this class triggers the animation
    // It's set on a delay proportional to the component's index
    // thus creating a cascading effect
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, this.props.index * 200);
  }
  render() {
    return (
      <div
        className={`window ${this.state.loading ? 'loading' : ''} ${
          this.props.isActive ? 'active' : ''
        }`}
        style={this.state.style}>
        <div className={`window_title`}>
          <p>{this.props.user}</p>
        </div>
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

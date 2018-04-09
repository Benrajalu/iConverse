import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // Check value first, then make the suitable object to pass to this.props.handleSubmit
  }

  render() {
    return (
      <form className="chatInput" onSubmit={this.handleSubmit}>
        <input type="text" />
        <button type="submit">OK</button>
      </form>
    );
  }
}

export default ChatInput;

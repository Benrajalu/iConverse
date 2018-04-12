import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmojiPicker from './EmojiPicker';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // Check value first, then make the suitable object to pass to this.props.handleSubmit
    if (this.state.value.length > 0) {
      const chatObject = {
        user: this.props.user,
        content: this.state.value,
        timestamp: Date.now()
      };
      this.props.handleSubmit(chatObject);

      // Reinitialise the value state (empty the field)
      this.input.value = '';
      this.setState({
        value: ''
      });
      this.props.handleType({
        user: this.props.user,
        action: 'remove'
      });

      return true;
    }

    // Default case is to warn that you need to fill some copy in, duh
    this.setState({
      error: true
    });
    setTimeout(() => {
      this.setState({
        error: false
      });
    }, 300);
  }

  handleChange(event) {
    // Handle the user's typing in the field
    this.setState(
      {
        value: event.target.value
      },
      () => {
        // When the user types, the component used the handleType prop to update the activity monitor
        // We'll use this to display a "UserB is typing" message in the relevant window
        const statusUpdate = {
          user: this.props.user,
          action: this.state.value.length > 0 ? 'add' : 'remove'
        };
        this.props.handleType(statusUpdate);
      }
    );
  }

  render() {
    // Checking activity prop for values that are not equal to the current user
    // then using this to display or hide the activity message
    const currentlyActive = this.props.activity.filter(
      value => value !== this.props.user
    );

    return (
      <form
        className={this.state.error ? 'window_input error' : 'window_input'}
        onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          ref={element => (this.input = element)}
          value={this.state.value}
          placeholder="Envoyez un message..."
        />
        <button type="submit">Envoyer</button>
        <div className="tools">
          <div className="activity">
            {currentlyActive.length > 0 ? (
              <p>
                {currentlyActive.length > 1
                  ? 'Plusieurs utilisateurs sont'
                  : currentlyActive.map(name => `${name} est`)}{' '}
                en train d'écrire...
              </p>
            ) : null}
          </div>
          <EmojiPicker />
        </div>
      </form>
    );
  }
}

ChatInput.propTypes = {
  user: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleType: PropTypes.func.isRequired,
  activity: PropTypes.array.isRequired
};

export default ChatInput;

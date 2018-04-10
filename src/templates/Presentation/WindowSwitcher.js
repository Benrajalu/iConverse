import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WindowSwitcher extends Component {
  render() {
    return (
      <div className="window-switcher">
        <button
          disabled={this.props.active === 0}
          onClick={this.props.handleActiveWindow.bind(
            this,
            'prev',
            this.props.users
          )}>
          Précédent
        </button>
        <button
          disabled={this.props.active === this.props.users.length - 1}
          onClick={this.props.handleActiveWindow.bind(
            this,
            'next',
            this.props.users
          )}>
          Suivant
        </button>
      </div>
    );
  }
}

WindowSwitcher.propTypes = {
  handleActiveWindow: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired
};

export default WindowSwitcher;

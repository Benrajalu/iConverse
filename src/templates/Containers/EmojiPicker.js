import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmojiPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: false,
      animationState: 'hidden'
    };

    this.togglePanel = this.togglePanel.bind(this);
    this.handleSmileyClick = this.handleSmileyClick.bind(this);
  }

  togglePanel() {
    if (!this.state.panel) {
      this.setState({
        panel: true,
        animationState: 'beginning'
      });
      setTimeout(() => {
        this.setState({
          animationState: 'completed'
        });
      }, 100);

      return true;
    }

    this.setState({
      animationState: 'beginning'
    });
    setTimeout(() => {
      this.setState({
        panel: false
      });
    }, 300);
  }

  handleSmileyClick(emoji) {
    this.togglePanel();
    this.props.appendEmoji(emoji);
  }

  render() {
    const smileyList = [
      '😀',
      '😁',
      '😂',
      '🤣',
      '😃',
      '😄',
      '😅',
      '😆',
      '😉',
      '😊',
      '😋',
      '😎',
      '😍',
      '😘',
      '😗',
      '😙',
      '😚',
      '🙂',
      '🤗',
      '🤔',
      '😐',
      '😑',
      '😶',
      '🙄',
      '😏',
      '😣',
      '😥',
      '😮',
      '🤐',
      '😯',
      '😪',
      '😫',
      '😴',
      '😌',
      '😛',
      '😜',
      '😝',
      '🤤',
      '😒',
      '😓',
      '😔',
      '😕',
      '🙃',
      '🤑',
      '😲',
      '🙁',
      '😖',
      '😞',
      '😟',
      '😤',
      '😢',
      '😭',
      '😦',
      '😧',
      '😨',
      '😩',
      '😬',
      '😰',
      '😱',
      '😳',
      '😵',
      '😡',
      '😠',
      '😷',
      '🤒',
      '🤕',
      '🤢',
      '🤧',
      '😇',
      '🤠',
      '🤡',
      '🤥',
      '🤓',
      '😈',
      '👿',
      '👹',
      '👺',
      '💀',
      '👻',
      '👽',
      '🤖',
      '💩',
      '😺',
      '😸',
      '😹',
      '😻',
      '😼',
      '😽',
      '🙀',
      '😿',
      '😾'
    ];
    return (
      <div className="emojiPicker">
        <button
          className={`trigger ${this.state.panel ? 'active' : ''}`}
          type="button"
          onClick={this.togglePanel}>
          <span role="img" aria-label="emoji">
            {this.state.panel ? '😄' : '😊'}
          </span>
        </button>

        <div
          className={`panel ${this.state.panel ? 'visible' : ''} ${
            this.state.animationState
          }`}>
          {smileyList.map((smiley, index) => (
            <button
              type="button"
              key={`smiley-${index}`}
              onClick={this.handleSmileyClick.bind(this, smiley)}>
              <span role="img" aria-label="emoji">
                {smiley}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

EmojiPicker.propTypes = {
  appendEmoji: PropTypes.func.isRequired
};

export default EmojiPicker;

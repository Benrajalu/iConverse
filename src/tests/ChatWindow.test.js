import React from 'react';
import ReactDOM from 'react-dom';
import ChatWindow from '../templates/Presentation/ChatWindow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatWindow />, div);
  ReactDOM.unmountComponentAtNode(div);
});

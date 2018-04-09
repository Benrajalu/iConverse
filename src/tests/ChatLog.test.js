import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from '../templates/Containers/ChatLog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatLog log={[]} user="test" activity={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

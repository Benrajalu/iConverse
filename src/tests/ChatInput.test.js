import React from 'react';
import ReactDOM from 'react-dom';
import ChatInput from '../templates/Containers/ChatInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ChatInput user="test" handleSubmit={() => true} handleType={() => true} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

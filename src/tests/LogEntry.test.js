import React from 'react';
import ReactDOM from 'react-dom';
import LogEntry from '../templates/Presentation/LogEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogEntry />, div);
  ReactDOM.unmountComponentAtNode(div);
});

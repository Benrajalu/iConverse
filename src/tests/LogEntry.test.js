import React from 'react';
import ReactDOM from 'react-dom';
import LogEntry from '../templates/Presentation/LogEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LogEntry
      value={{ user: 'test', content: 'testing', timestamp: Date.now() }}
      originalAuthor={true}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

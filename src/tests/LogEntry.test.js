import React from 'react';
import ReactDOM from 'react-dom';
import LogEntry from '../templates/Presentation/LogEntry';

import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LogEntry
      value={{ user: 'test', content: ['testing'], timestamp: Date.now() }}
      originalAuthor={true}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('The LogEntry component...', () => {
  const logEntry = mount(
    <LogEntry
      value={{ user: 'test', content: ['testing'], timestamp: Date.now() }}
      originalAuthor={false}
    />
  );

  test("...doesn't have the active class when the author is not the expcted one", () => {
    expect(logEntry.find('.logEntry.authored').length).toBe(0);
  });

  test('...but add the authored class to the relevant chat item', () => {
    logEntry.setProps({
      originalAuthor: true
    });
    expect(logEntry.find('.logEntry.authored').length).toBe(1);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from '../templates/Containers/ChatLog';

import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatLog log={[]} user="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('The ChatLog component...', () => {
  const log = mount(<ChatLog log={[]} user="test" />);

  test('...displays all given messages', () => {
    log.setProps({
      log: [
        {
          user: 'userA',
          content: ['Lorem ipsum dolor sit amet'],
          timestamp: Date.now()
        },
        {
          user: 'userB',
          content: ['Lorem ipsum dolor sit amet'],
          timestamp: Date.now() + 2
        }
      ]
    });
    expect(log.find('.log_entry').length).toBe(2);
  });
});

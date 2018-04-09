import React from 'react';
import ReactDOM from 'react-dom';
import ChatWindow from '../templates/Presentation/ChatWindow';

import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ChatWindow
      handleSubmit={() => {
        return true;
      }}
      handleType={() => {
        return true;
      }}
      log={[]}
      user="userA"
      activity={[]}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('The chat window...', () => {
  const windowItem = mount(
    <ChatWindow
      handleSubmit={() => {
        return true;
      }}
      handleType={() => {
        return true;
      }}
      log={[]}
      user="userA"
      activity={[]}
    />
  );

  test("...doesn't display activity when its attached user is typing", () => {
    windowItem.setProps({
      activity: ['userA']
    });
    expect(windowItem.find('.activity p').length).toBe(0);
  });

  test('...DOES display activity when other users are typing', () => {
    windowItem.setProps({
      activity: ['userB', 'userC']
    });
    expect(windowItem.find('.activity p').length).toBe(1);
  });
});

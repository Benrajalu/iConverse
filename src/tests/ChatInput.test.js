import React from 'react';
import ReactDOM from 'react-dom';
import ChatInput from '../templates/Containers/ChatInput';

import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ChatInput user="test" handleSubmit={() => true} handleType={() => true} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('The input component...', () => {
  const input = mount(
    <ChatInput user="test" handleSubmit={() => true} handleType={() => true} />
  );

  test('...is fine when submitting some content', () => {
    input.setState({
      value: 'test'
    });
    input.find('form').simulate('submit');
    expect(input.find('.error').length).toBe(0);
  });

  test('...adds an error class when submiting empty', () => {
    input.setState({
      value: ''
    });
    input.find('form').simulate('submit');
    expect(input.find('.error').length).toBe(1);
  });
});

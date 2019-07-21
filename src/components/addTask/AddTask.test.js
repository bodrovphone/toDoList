import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddTask from './';

configure({ adapter: new Adapter() });

const props = {
  newTask: jest.fn()
};

describe('Add Task', () => {
  let add = mount(<AddTask {...props} />);

  it('renders checkbox input', () => {
    expect(add.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it('renders text input', () => {
    expect(add.find('input[type="text"]').exists()).toBe(true);
  });

  it('has text input with placeholder', () => {
    expect(add.find('input[type="text"]').prop('placeholder')).toEqual(
      'What needs to be done?'
    );
  });

  describe('when clicking Enter on the input', () => {
    add.find('input[type="text"]').simulate('keyPress', { key: 'Enter' });

    it('envokes newTask function', () => {
      expect(props.newTask).toBeCalled();
    });
  });
});

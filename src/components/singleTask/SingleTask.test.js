import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SingleTask from './';

configure({ adapter: new Adapter() });

describe('SingleTask', () => {
  let task = mount(<SingleTask tasks={[{ name: 'test', done: false, edit: false }]} index={0} />);

  it('renders done checkbox', () => {
    expect(task.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it('renders label', () => {
    expect(task.find('label').exists()).toBe(true);
  });

  it('the label is associated with the checkbox', () => {
    expect(
      task.find('label').prop('htmlFor') ===
        task.find('input[type="checkbox"]').prop('id')
    ).toBe(true);
  });

  it('renders delete button', () => {
    expect(task.find('button').exists()).toBe(true);
  });
});

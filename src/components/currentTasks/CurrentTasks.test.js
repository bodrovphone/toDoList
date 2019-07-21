import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CurrentTasks from './';

configure({ adapter: new Adapter() });

describe('Current Tasks', () => {
  let list = mount(<CurrentTasks allTasks={[{ name: 'ok', done: false, edit: false }]} />);

  it('renders container', () => {
    expect(list.find('div.container').exists()).toBe(true);
  });

  describe('when rendering currentTasks', () => {
    it('creates a SingleTask component', () => {
      expect(list.find('SingleTask').exists()).toBe(true);
    });
    it('creates a Footer component', () => {
      expect(list.find('Footer').exists()).toBe(true);
    });
  });
});

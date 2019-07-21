import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

const testState = {
  tasks: [
    { name: '15asdasd', done: false, edit: false },
    { name: 'sfs', done: false, edit: false },
    { name: '123', done: false, edit: false },
    { name: '1', done: false, edit: false }
  ],
  activeFilter: 'all'
};

describe('App container', () => {
  let app = mount(<App {...testState} />);
  // console.log(task.debug());

  it('renders AddTask component', () => {
    expect(app.find('AddTask').exists()).toBe(true);
  });

  it('renders CurrentTasks', () => {
    expect(app.find('CurrentTasks').exists()).toBe(true);
  });
});

export { testState };

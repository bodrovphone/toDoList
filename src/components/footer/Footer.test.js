import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './';

configure({ adapter: new Adapter() });

describe('Footer', () => {
  let footer = mount(<Footer activeTasks={[{ name: 'test', done: false, edit: false }]} />);
  // console.log(footer.debug());

  it('renders the number of items label', () => {
    expect(
      footer
        .find('div')
        .first()
        .text()
    ).toEqual('1 item left');
  });

  it('renders #all filter', () => {
    expect(footer.find('#all').exists()).toBe(true);
  });

  it('renders #active filter', () => {
    expect(footer.find('#active').exists()).toBe(true);
  });

  it('renders #completed filter', () => {
    expect(footer.find('#completed').exists()).toBe(true);
  });

  it('renders .clear-items button', () => {
    expect(footer.find('.clear-items').exists()).toBe(true);
  });
});

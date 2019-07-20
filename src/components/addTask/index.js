// lib
import React, { Component } from 'react';
// components
import AddTaskStyles from './AddTaskStyles';

export default class AddTask extends Component {
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.newTask(event.target.value);
      event.target.value = '';
    }
  };
  render() {
    return (
      <AddTaskStyles>
        <input
          type="checkbox"
          hidden={!this.props.isToggable}
          onChange={this.props.toggleAll}
        />
        <input
          type="text"
          placeholder="What needs to be done?"
          onKeyPress={this.handleKeyPress}
        />
      </AddTaskStyles>
    );
  }
}

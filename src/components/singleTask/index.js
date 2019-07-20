import React, { Component } from 'react';
import {
  EditableInputStyles,
  SingleTaskStyles,
  DeleteTaskStyles
} from './SingleTaskStyles';

export default class SingleTask extends Component {
  handleOnMouseOver = event => {
    event.currentTarget.lastChild.classList.add('delete');
  };

  handleOffMouseOver = event => {
    event.currentTarget.lastChild.classList.remove('delete');
  };

  conditionalEdit = event => {
    if (event.type === 'keypress' && event.key !== 'Enter') {
      return;
    }
    this.props.editTask(event);
  };
  isEditable = edit => {
    let { index, name, editTask, updateTask, isDone, deleteTask } = this.props;

    if (edit) {
      return (
        <EditableInputStyles
          autoFocus
          data-index={index}
          type="text"
          defaultValue={name}
          onKeyPress={this.conditionalEdit}
          onBlur={editTask}
        />
      );
    } else {
      return (
        <SingleTaskStyles
          onMouseEnter={this.handleOnMouseOver}
          onMouseLeave={this.handleOffMouseOver}
          onDoubleClick={e => {
            const eventClone = e;
            editTask(eventClone);
          }}
          data-index={index}
        >
          <input
            type="checkbox"
            id={index}
            name={name}
            onChange={updateTask}
            checked={isDone}
          />
          <label htmlFor={index} className={isDone ? 'task-is-done' : ''}>
            {name}
          </label>
          <DeleteTaskStyles data-index={index} onClick={deleteTask} />
        </SingleTaskStyles>
      );
    }
  };

  render() {
    return this.isEditable(this.props.edit);
  }
}

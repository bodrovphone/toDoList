// lib
import React, { Component } from 'react';

// components
import SingleTask from '../singleTask';
import Footer from '../footer';
import SheetsEffectStyles from './SheetsEffectStyles';

export default class CurrentTasks extends Component {
  conditionalRender = (allTasks, filter) => {
    if (filter === 'all') {
      return allTasks.map((task, index) => {
        return (
          <SingleTask
            {...this.props}
            isDone={task.done}
            key={index}
            index={index}
            name={task.name}
            edit={task.edit}
          >
            {task.name}
          </SingleTask>
        );
      });
    } else if (filter === 'active') {
      return allTasks
        .filter(task => !task.done)
        .map((task, index) => {
          return (
            <SingleTask
              {...this.props}
              isDone={task.done}
              key={index}
              index={index}
              name={task.name}
              edit={task.edit}
            >
              {task.name}
            </SingleTask>
          );
        });
    } else if (filter === 'completed') {
      return allTasks
        .filter(task => task.done)
        .map((task, index) => {
          return (
            <SingleTask
              {...this.props}
              isDone={task.done}
              key={index}
              index={index}
              name={task.name}
              edit={task.edit}
            >
              {task.name}
            </SingleTask>
          );
        });
    }
  };

  render() {
    const allTasks = this.props.allTasks;
    const activeTasks = allTasks.filter(task => !task.done);

    if (!allTasks.length) return null;
    return (
      <div>
        <div className="container task-list">
          {this.conditionalRender(allTasks, this.props.activeFilter)}
        </div>
        <Footer activeTasks={activeTasks} {...this.props} />
        <SheetsEffectStyles />
      </div>
    );
  }
}

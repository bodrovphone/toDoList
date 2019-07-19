// lib
import React, { Component, Fragment } from 'react';

// components
import SingleTask from '../singleTask';
import Footer from '../footer';
import SheetsEffectStyles from './SheetsEffectStyles';

export default class CurrentTasks extends Component {
  conditionalRender = (allTasks, filter) => {
    const { editTask } = this.props;
    if (filter === 'active') {
      allTasks = allTasks.filter(task => !task.done);
    }
    if (filter === 'completed') {
      allTasks = allTasks.filter(task => task.done);
    }
    return allTasks.map((task, index) => {
      return (
        <SingleTask
          isDone={task.done}
          key={index}
          index={index}
          name={task.name}
          edit={task.edit}
          editTask={editTask}
        >
          {task.name}
        </SingleTask>
      );
    });
  };

  render() {
    const allTasks = this.props.allTasks;
    const activeTasks = allTasks.filter(task => !task.done);

    if (!allTasks.length) return null;
    return (
      <Fragment>
        <div className="container">
          {this.conditionalRender(allTasks, this.props.activeFilter)}
        </div>
        <Footer activeTasks={activeTasks} {...this.props} />
        <SheetsEffectStyles />
      </Fragment>
    );
  }
}

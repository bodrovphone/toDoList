// lib
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// components
import AddTask from '../components/addTask';
import CurrentTasks from '../components/currentTasks';

// actions
import {
  addTask,
  updateTask,
  deleteTask,
  toggleTasks,
  enableFilter,
  clearCompleted,
  editTask
} from '../actions';

class App extends Component {
  componentDidUpdate() {
    localStorage.obodrovToDos = JSON.stringify(this.props);
  }

  render() {
    const {
      tasks,
      activeFilter,
      enableFilter,
      addTask,
      clearCompleted,
      updateTask,
      deleteTask,
      toggleTasks,
      editTask
    } = this.props;
    return (
      <Fragment>
        <AddTask
          newTask={addTask}
          toggleAll={toggleTasks}
          isToggable={tasks.length}
        />
        <CurrentTasks
          allTasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
          enableFilter={enableFilter}
          activeFilter={activeFilter}
          clearCompleted={clearCompleted}
          editTask={editTask}
        />
      </Fragment>
    );
  }
}

function mapStoreToProps(store) {
  return store;
}

// export
export default connect(
  mapStoreToProps,
  {
    addTask,
    deleteTask,
    enableFilter,
    clearCompleted,
    updateTask,
    toggleTasks,
    editTask
  }
)(App);

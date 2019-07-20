// lib
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// components
import AddTask from './components/addTask';
import CurrentTasks from './components/currentTasks';

// 1. initializing main state
const mainState = JSON.parse(localStorage.getItem('obodrovToDos')) || {
  tasks: [],
  activeFilter: 'all'
};

// 2. put mainStait into localStorage
const syncStorage = state =>
  (localStorage.obodrovToDos = JSON.stringify(state));

// 3 function to render the app (re-render)
const renderApp = () =>
  ReactDOM.render(<App />, document.getElementById('root'));

class App extends Component {
  componentDidUpdate() {
    syncStorage(mainState);
  }

  addTask = task => {
    mainState.tasks.push({ name: task, done: false, edit: false });
    syncStorage(mainState);
    renderApp();
  };

  updateTasks = event => {
    const id = Number(event.target.id);
    mainState.tasks[id].done = !mainState.tasks[id].done;
    syncStorage(mainState);
    renderApp();
  };

  toggleAll = event => {
    let { tasks } = mainState;
    if (!tasks.length) return;
    const toggle = event.target.checked;
    mainState.tasks = tasks.map(function(task) {
      task.done = toggle;
      return task;
    });
    syncStorage(mainState);
    renderApp();
  };

  deleteTask = event => {
    const index = +event.target.dataset.index;
    mainState.tasks.splice(index, 1);
    syncStorage(mainState);
    renderApp();
  };

  enableFilter = event => {
    mainState.activeFilter = event.target.id;
    syncStorage(mainState);
    renderApp();
  };

  clearCompleted = () => {
    mainState.tasks = mainState.tasks.filter(task => !task.done);
    syncStorage(mainState);
    renderApp();
  };

  editTask = event => {
    if (event.type === 'keypress' && event.key !== 'Enter') return;
    const id = event.currentTarget.dataset.index;
    const value =
      event.key === 'Enter' || event.type === 'blur'
        ? event.target.value
        : event.currentTarget.childNodes[1].innerHTML;
    mainState.tasks[id].edit = !mainState.tasks[id].edit;
    mainState.tasks[id].name = value;
    syncStorage(mainState);
    renderApp();
  };

  render() {
    const { tasks, activeFilter } = mainState;
    return (
      <Fragment>
        <AddTask newTask={this.addTask} toggleAll={this.toggleAll} />
        <CurrentTasks
          allTasks={tasks}
          updateTasks={this.updateTasks}
          deleteTask={this.deleteTask}
          enableFilter={this.enableFilter}
          activeFilter={activeFilter}
          clearCompleted={this.clearCompleted}
          editTask={this.editTask}
        />
      </Fragment>
    );
  }
}

renderApp();

// lib
import React, { Component } from 'react';

// components
import AddTask from '../components/addTask';
import CurrentTasks from '../components/currentTasks';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('obodrovToDos')) || {
      tasks: [],
      activeFilter: 'all'
    };
  }

  componentDidUpdate() {
    localStorage.obodrovToDos = JSON.stringify(this.state);
  }

  addTask = task => {
    this.setState({
      ...this.state.tasks.push({ name: task, done: false, edit: false })
    });
  };

  updateTasks = event => {
    const id = Number(event.target.id);
    let { tasks } = this.state;
    tasks[id].done = !tasks[id].done;
    this.setState({ tasks });
  };

  toggleAll = event => {
    const { tasks } = this.state;
    if (!tasks.length) return;
    const toggle = event.target.checked ? true : false;
    const newData = tasks.map(function(task) {
      task.done = toggle;
      return task;
    });
    this.setState({ ...newData });
  };

  deleteTask = event => {
    const index = +event.target.dataset.index;
    let { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  enableFilter = event => {
    this.setState({ activeFilter: event.target.id });
  };

  clearCompleted = () => {
    const { tasks } = this.state;
    const newData = tasks.filter(task => !task.done);
    this.setState({ tasks: newData });
  };

  editTask = event => {
    if (event.type === 'keypress' && event.key !== 'Enter') return;
    const id = event.currentTarget.dataset.index;
    const value =
      event.key === 'Enter' || event.type === 'blur'
        ? event.target.value
        : event.currentTarget.childNodes[1].innerHTML;
    const { tasks } = this.state;
    tasks[id].edit = !tasks[id].edit;
    tasks[id].name = value;
    this.setState({ tasks });
  };

  render() {
    const { tasks, activeFilter } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

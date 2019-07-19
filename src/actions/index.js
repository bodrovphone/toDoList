import {
  ADD_TASK,
  EDIT_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  TOGGLE_TASKS,
  ENABLE_FILTER,
  CLEAR_COMPLETED
} from '../constants';

const addTask = task => ({
  type: ADD_TASK,
  payload: task
});

const editTask = tasks => ({
  type: EDIT_TASK,
  payload: tasks
});

const updateTask = task => ({
  type: UPDATE_TASK,
  payload: task
});

const deleteTask = event => ({
  type: DELETE_TASK,
  payload: +event.target.dataset.index
});

const toggleTask = bool => ({
  type: TOGGLE_TASKS,
  payload: bool
});

const enableFilter = filter => ({
  type: ENABLE_FILTER,
  payload: filter
});

const clearCompleted = bool => ({
  type: CLEAR_COMPLETED,
  payload: bool
});

export {
  addTask,
  editTask,
  updateTask,
  deleteTask,
  toggleTask,
  enableFilter,
  clearCompleted
};

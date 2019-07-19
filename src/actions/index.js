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

const editTask = event => ({
  type: EDIT_TASK,
  payload: event
});

const updateTask = event => ({
  type: UPDATE_TASK,
  payload: Number(event.target.id)
});

const deleteTask = event => ({
  type: DELETE_TASK,
  payload: +event.target.dataset.index
});

const toggleTasks = event => ({
  type: TOGGLE_TASKS,
  payload: event.target.checked
});

const enableFilter = event => ({
  type: ENABLE_FILTER,
  payload: event
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
  toggleTasks,
  enableFilter,
  clearCompleted
};

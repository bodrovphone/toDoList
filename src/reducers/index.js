import _ from 'lodash';

import {
  ADD_TASK,
  EDIT_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  TOGGLE_TASKS,
  ENABLE_FILTER,
  CLEAR_COMPLETED
} from '../constants';

const initialState = JSON.parse(localStorage.getItem('obodrovToDos')) || {
  tasks: [],
  activeFilter: 'all'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { name: action.payload, done: false, edit: false }
        ]
      };

    case EDIT_TASK:
      const id = action.payload.currentTarget.dataset.index;
      const value =
        action.payload.key === 'Enter' || action.payload.type === 'blur'
          ? action.payload.target.value
          : action.payload.currentTarget.childNodes[1].innerHTML;
      let clone = _.cloneDeep(state);
      clone.tasks[id].edit = !clone.tasks[id].edit;
      clone.tasks[id].name = value;

      return clone;

    case DELETE_TASK:
      let newState = _.cloneDeep(state);
      newState.tasks.splice(action.payload, 1);
      return newState;
    case ENABLE_FILTER:
      return {
        ...state,
        activeFilter: action.payload.target.id
      };
    case CLEAR_COMPLETED:
      const clearedTasks = state.tasks.filter(task => !task.done);
      return {
        ...state,
        tasks: clearedTasks
      };
    case UPDATE_TASK:
      let cloneState = _.cloneDeep(state);
      cloneState.tasks[action.payload].done = !cloneState.tasks[action.payload]
        .done;
      return cloneState;
    case TOGGLE_TASKS:
      let stateClone = _.cloneDeep(state);
      stateClone.tasks.map(function(task) {
        task.done = action.payload;
        return task;
      });
      return stateClone;
    default:
      return state;
  }
}

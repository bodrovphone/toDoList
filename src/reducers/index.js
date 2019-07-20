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
  var stateClone = _.cloneDeep(state);
  var data = action.payload;
  switch (action.type) {
    case ADD_TASK:
      stateClone.tasks.unshift({
        name: data,
        done: false,
        edit: false
      });

      return stateClone;

    case EDIT_TASK:
      const id = data.currentTarget.dataset.index;
      const value =
        data.key === 'Enter' || data.type === 'blur'
          ? data.target.value
          : data.currentTarget.childNodes[1].innerHTML;
      stateClone.tasks[id].edit = !stateClone.tasks[id].edit;
      stateClone.tasks[id].name = value;

      return stateClone;

    case DELETE_TASK:
      stateClone.tasks.splice(data, 1);

      return stateClone;

    case ENABLE_FILTER:
      stateClone.activeFilter = data.target.id;

      return stateClone;

    case CLEAR_COMPLETED:
      const clearedTasks = state.tasks.filter(task => !task.done);

      return {
        ...state,
        tasks: clearedTasks
      };

    case UPDATE_TASK:
      stateClone.tasks[action.payload].done = !stateClone.tasks[action.payload]
        .done;

      return stateClone;

    case TOGGLE_TASKS:
      stateClone.tasks.map(function(task) {
        task.done = action.payload;
        return task;
      });

      return stateClone;

    default:
      return state;
  }
}

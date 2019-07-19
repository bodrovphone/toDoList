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
      break;
    case EDIT_TASK:
      return {
        ...state,
        tasks: action.payload.tasks
      };
      break;
    case DELETE_TASK:
      var newState = { ...state };
      newState.tasks.splice(action.payload, 1);
      console.log('newState', action.payload, newState);

      return { ...newState };
      break;
    default:
      return state;
  }
}
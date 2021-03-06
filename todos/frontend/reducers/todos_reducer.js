import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODO:
      let nextState = merge({}, state);
      nextState[action.todo.id] = action.todo;
      return nextState;
    case RECEIVE_TODOS:
      return [...state].concat(action.todos);
    default:
      return state;
  }
};

export default todosReducer;

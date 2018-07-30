import {combineReducers, Redux} from 'redux';
import todosReducer from './todos_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  testing: 5
});




export default rootReducer;

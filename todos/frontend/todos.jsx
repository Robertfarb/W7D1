import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Redux from 'redux';
import {createStore} from 'redux';
import configureStore from './store/store';
import {receiveTodo} from './actions/todo_actions';
import allTodos from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  // debugger
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);


    window.store = store;
    window.receiveTodo = receiveTodo;
    window.allTodos = allTodos;
  }
);

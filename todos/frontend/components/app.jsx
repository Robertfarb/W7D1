import  React from 'react';
import TodoList from './todos/todo_list_container';
import ToDoForm from './todos/todo_form_container';

const App = () => (
  <div>
    <TodoList />
    <ToDoForm />
  </div>
);

export default App;

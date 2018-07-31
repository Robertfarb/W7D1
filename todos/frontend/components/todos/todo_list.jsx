import React from 'react';
import ToDoListItem from './todo_list_item';

const todoList = (props) => {
  return (
    <div>
      <h2>To Do List:</h2>
      <ul>
        {props.todos.map((el) => <ToDoListItem key={el.id} todo={el}/>)}
      </ul>
    </div>
  );
};

export default todoList;

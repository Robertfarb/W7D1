const allTodos = (state) => {
  let todos = Object.keys(state.todos);
  return todos.map((el) => state.todos[el]);
};

export default allTodos;

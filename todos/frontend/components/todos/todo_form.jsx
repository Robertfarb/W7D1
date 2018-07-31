import React from 'react';
import uniqueId from '../../utils/todo_api_util';

class ToDoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputBody = this.handleInputBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputTitle(e) {
  console.log(e.target.value);
    this.setState({ title: e.target.value });
  }

  handleInputBody(e) {
  console.log(e.target.value);
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    // debugger

    e.preventDefault();
    let newTodo = {};
    newTodo.title = this.state.title;
    newTodo.body = this.state.body;
    newTodo.id = uniqueId();
    newTodo.done = this.state.done;
    this.props.receiveTodo(newTodo);
    this.setState({
      title: "",
      body: '',
      done: false
    });
  }

  render () {
    return (
      <form>
        <label>Title
          <input onChange={this.handleInputTitle} value={this.state.title}></input>
        </label>
        <br></br>
        <label>Body
          <input onChange={this.handleInputBody} value={this.state.body}></input>
        </label>
        <br></br>
        <button onClick={this.handleSubmit}>Create Todo!</button>
      </form>
    );
  }
}

export default ToDoForm;

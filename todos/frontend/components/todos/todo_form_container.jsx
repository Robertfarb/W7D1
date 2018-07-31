import {connect} from 'react-redux';
import ToDoForm from './todo_form';
import {receiveTodo, receiveTodos} from '../../actions/todo_actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoForm);

import React from 'react';
import { connect } from 'react-redux';

import { updateTodo, removeTodo, nonEditableTodo } from '../actions/index';
import ToDoForm from './ToDoForm';

class EditToDoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (todo) => {
    const text = todo.text;
    const id = this.props.todo.id;
    this.props.dispatch(updateTodo(id, { text }));
  };

  onRemove = () => {
    const id = this.props.todo.id;
    this.props.dispatch(removeTodo({ id }));
  };

  onCancel = () => {
    const id = this.props.todo.id;
    this.props.dispatch(nonEditableTodo({ id }));
  };

  render() {
    return (
      <div>
        <ToDoForm onSubmit={this.onSubmit} onCancel={this.onCancel} todo={this.props.todo} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}


export default connect()(EditToDoForm);
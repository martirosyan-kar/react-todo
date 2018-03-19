import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/index';
import ToDoForm from './ToDoForm';

class AddToDoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: false
    };
  }

  onSubmit = (todo) => {
    const text = todo.text;
    this.props.dispatch(addToDo({ text }));
  };

  onCancel = () => {
    this.setState(() => ({ input: false }));
  };

  onAddTaskClick = () => {
    this.setState(() => ({ input: true }));
  };

  render () {
    return (
      <div>
      {
        this.state.input ? <ToDoForm onSubmit={this.onSubmit} onCancel={this.onCancel} /> : (
          <span onClick={this.onAddTaskClick}>Add Task</span>
        )
      }
      </div>
    );
  }
}

export default connect()(AddToDoForm);
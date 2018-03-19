import React from 'react';
import { connect } from 'react-redux';

import {editToDo, toggleToDo} from '../actions/index';
import EditToDoForm from './EditToDoForm';

class ToDoListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  onTaskClick = () => {
    const id = this.props.todo.id;
    this.props.dispatch(editToDo({ id }));
  };

  onCompleteClick = () => {
    const id = this.props.todo.id;
    this.props.dispatch(toggleToDo({ id }));
  };

  render () {
    return (
      <div>
        <span onClick={this.onCompleteClick}>Click to complete</span>
        {this.props.todo.editable ? <EditToDoForm todo={this.props.todo} /> :
          <h2 className={this.props.todo.completed && 'strike'}
            onClick={this.onTaskClick}
          >{this.props.todo.text}</h2>}
      </div>
    );
  }
}

export default connect()(ToDoListItem);
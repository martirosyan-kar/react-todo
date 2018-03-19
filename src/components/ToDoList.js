import React from 'react';
import { connect } from 'react-redux';

import ToDoListItem from './ToDoListItem';
import AddToDoForm from './AddToDoForm';

class ToDoList extends React.Component {
  constructor (props) {
    super(props);
  }
  onEdit = (e) => {

  };

  onChange = (e) => {

  };

  render () {

    return (
    <div>
      {
        this.props.todos.map(todo => (
            <ToDoListItem key={todo.id} todo={todo} />
          )
        )
      }
      <AddToDoForm />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

export default connect(mapStateToProps)(ToDoList);
import React from "react";
import { connect } from "react-redux";

import ToDoListItem from "./ToDoListItem";
import AddToDoForm from "./AddToDoForm";

const ToDoList = props => {
  return (
    <div>
      {props.todos.map(todo => <ToDoListItem key={todo.id} todo={todo} />)}
      <AddToDoForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(ToDoList);

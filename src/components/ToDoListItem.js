import React from "react";
import { connect } from "react-redux";

import { editToDo, toggleToDo } from "../actions/index";
import EditToDoForm from "./EditToDoForm";

class ToDoListItem extends React.Component {
  constructor(props) {
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

  render() {
    return (
      <div>
        <div className="pull-left">
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onClick={this.onCompleteClick}
          />
        </div>
        {this.props.todo.editable ? (
          <EditToDoForm todo={this.props.todo} />
        ) : (
          <h3
            className={this.props.todo.completed && "strike"}
            onClick={this.onTaskClick}
          >
            {this.props.todo.text}
          </h3>
        )}
      </div>
    );
  }
}

export default connect()(ToDoListItem);

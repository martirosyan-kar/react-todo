import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.todo && props.todo.text ? props.todo.text : ""
    };
    this.addForm = !props.todo;
  }

  onTextChange = e => {
    const text = e.target.value;
    this.setState(() => ({ text }));
  };

  onSubmit = e => {
    e.preventDefault();
    const text = this.state.text;
    if (text) {
      this.props.onSubmit({ text });
      if (this.addForm) {
        this.setState(() => ({ text: "" }));
      }
    }
  };

  onCancel = e => {
    e.preventDefault();
    this.props.onCancel();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Add a task"
            value={this.state.text}
            onChange={this.onTextChange}
            autoFocus="true"
          />
          <button>{this.addForm ? "Add Task" : "Save"}</button>
          <button onClick={this.onCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

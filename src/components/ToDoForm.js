import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

export default class TodoForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      text: props.todo && props.todo.text ? props.todo.text : '',
      dueDate: props.todo && props.todo.dueDate ? moment(props.todo.dueDate) : moment(),
      calendarFocused: false
    };
    this.addForm = !props.todo;
  }

  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const text = this.state.text;
    if(text) {
      this.props.onSubmit({ text });
      if(this.addForm) {
        this.setState(() => ({text: ''}));
      }
    }
  };

  onCancel = (e) => {
    e.preventDefault();
    this.props.onCancel();
  };

  onDateChange(dueDate) {
    if (dueDate) {
      this.setState(() => ({ dueDate }));
    }
  }

  onFocusChange({ focused }) {
    this.setState(() => ({ calendarFocused: focused }));
  }

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

          <SingleDatePicker
            date={this.state.dueDate}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => true}
          />

          <button>{this.addForm ? 'Add Task' : 'Save'}</button>
          <button onClick={this.onCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}
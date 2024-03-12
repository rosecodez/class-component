import React, { Component, useState } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      count: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
      count: state.count + 1,
    }));
  }

  deleteTask(index) {
    this.setState((state) => ({
        todos: state.todos.filter((_, i) => i !== index),
        count: state.count - 1,
    }));
  }
  
  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks! {this.state.count} tasks</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo}>
              {todo}
              <button onClick={() => this.deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>

      </section>
    );
  }
}

export default ClassInput;
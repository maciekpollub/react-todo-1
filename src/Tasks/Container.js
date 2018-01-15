import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import TasksList from './TasksList';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      task: '',
      tasks: ['one', 'two']
    };
    this.textChanged = this.textChanged.bind(this);
    this.searchChanged = this.searchChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnRemove = this.handleOnRemove.bind(this);
  }

  textChanged(event) {
    this.setState({task: event.target.value});
  }

  searchChanged(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: ''
    });
    event.preventDefault();
  }

  handleOnRemove(taskToRemove) {
    this.setState({
      tasks: this.state.tasks.filter(task => task !== taskToRemove),
      task: ''
    });
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="task"
              label="Task"
              value={this.state.task}
              onChange={this.textChanged}
              margin="normal"
            />
            <Button type="submit" raised color="primary">Add</Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="task"
            label="Search"
            onChange={this.searchChanged}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <h2>My tasks</h2>
          <TasksList
            query={this.state.query}
            tasks={this.state.tasks}
            onRemove={this.handleOnRemove}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Container;

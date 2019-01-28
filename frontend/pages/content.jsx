import React, { Component } from 'react';
import fetch from 'node-fetch';
import List from './list.jsx';

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAddActive: true,
      editId: '',
      value: '',
    };
  }

  add = () => fetch(this.props.api, {
    method: 'POST',
    body: JSON.stringify({ newToDo: this.state.value }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => {
      this.props.fetchTodos();
      this.setState({ value: '' });
    })
    .catch(console.error)

  update = () => fetch(this.props.api + this.state.editId, {
    method: 'PUT',
    body: JSON.stringify({ newToDo: this.state.value }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => {
      this.props.fetchTodos();
      this.setState({ isAddActive: true, value: '' });
    })
    .catch(console.error)

  onChange = e => this.setState({ value: e.target.value });

  editing = () => this.setState({ isAddActive: false });

  storeEditId = id => this.setState({ editId: id });

  setTextfield = value => this.setState({ value });


  render () {
    return (
      <div>
        <div>
          <h2>
            Add new todo
          </h2>

          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
            required="required"
          />

          <button
            onClick={this.add}
            style={{ display: this.state.isAddActive ? 'inline' : 'none' }}
            disabled={!this.state.value}
          >
            Add
          </button>

          <button
            onClick={this.update}
            style={{display: this.state.isAddActive ? 'none' : 'inline' }}
            disabled={!this.state.value}
          >
            Save
          </button>
        </div>

        <h2>
          To-do list
        </h2>
        <List
          todos={this.props.todos}
          api={this.props.api}
          fetchTodos={this.props.fetchTodos}
          editing={this.editing}
          storeEditId={this.storeEditId}
          setTextfield={this.setTextfield}
        />
      </div>
    )
  }
}

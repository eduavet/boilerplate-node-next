import React, { Component } from 'react';
import { render } from 'react-dom';
import fetch from 'node-fetch';
import Content from './content.jsx';

const API_URL = 'http://mutable.local:8888/api/todos/';

export default class extends Component {
  
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.fetchTodos();
  }

  fetchTodos = () => fetch(API_URL)
    .then(res => res.json())
    .then(data => this.setState({ todos: data }))
    .catch(console.error);

  render () {
    return (
        <div>
          <Content
            fetchTodos={this.fetchTodos}
            todos={this.state.todos}
            api={API_URL}
          />
        </div>
    )
  }
}

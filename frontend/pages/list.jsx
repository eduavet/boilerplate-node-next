import React, { Component } from 'react';
import fetch from 'node-fetch';

export default class List extends Component {

  edit = (text, id) => {
    this.props.setTextfield(text);
    this.props.editing();
    this.props.storeEditId(id);
  }

  delete = (id) => fetch(this.props.api + id, {
      method: 'DELETE'
    })
    .then(this.props.fetchTodos)
    .catch(console.error)

  render () {
    return (
    <div>
      <ol>
        {this.props.todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo.text}
              <button onClick={ () => this.edit(todo.text, todo.id) } >
                Edit
              </button>
              <button onClick={ () => this.delete(todo.id) } >
                Delete
              </button>
            </li>
          )
        })}
      </ol>
    </div>
    )
  }
}



import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
//import todoApp from './TodoReducers';
import {addTodo, completeTodo, deleteTodo, clearTodo} from './TodoActions';
import configureStore from '../app/configureStore.js';

var defaultState = {
  todo: {
    todo:{  //<-- TODO: ver si es asi o hay que sacar un todo
        items: [],
        cool: 1
    }
  }
};


//var store = createStore(todoApp, defaultState);
var store = configureStore(defaultState);  //TODO: hay que sacar el createStore de aca

class AddTodoForm extends React.Component {
  state = {
    message: ''
  };

  onFormSubmit(e) {
    e.preventDefault();
    store.dispatch(addTodo(this.state.message));
    this.setState({ message: '' });
  }

  onMessageChanged(e) {
    var message = e.target.value;
    this.setState({ message: message });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type="text" placeholder="Todo..." onChange={this.onMessageChanged.bind(this)} value={this.state.message} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

class TodoItem extends React.Component {
  onDeleteClick() {
    store.dispatch(deleteTodo(this.props.index));
  }

  onCompletedClick() {
    store.dispatch(completeTodo(this.props.index));
  }

  render() {
    return (
      <li>
        <a href="#" onClick={this.onCompletedClick.bind(this)} style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.message.trim()}</a>&nbsp;
        <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none'}}>[x]</a>
      </li>
    );
  }
}

class TodoList extends React.Component {
  state = {
    items: []
  };

  componentWillMount() {
    store.subscribe(() => {
      var state = store.getState();
      this.setState({
        items: state.todo.todo.items
      });
    });
  }

  render() {
    var items = [];

    this.state.items.forEach((item, index) => {
      items.push(<TodoItem
        key={index}
        index={index}
        message={item.message}
        completed={item.completed}
      />);
    });

    if (!items.length) {
      return (
        <p>
          <i>Please add something to do.</i>
        </p>
      );
    }

    return (
      <ol>{ items }</ol>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>Todo</h1>
    <AddTodoForm />
    <TodoList />
  </div>,
  document.getElementById('container')
);



import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

export const TodoView = () => {
  return (
    <div>
      <AddTodo/>
      <TodoList/>
    </div>
  );
};


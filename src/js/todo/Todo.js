
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

export const TodoView = () => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading text-right">
        <AddTodo/>
      </div>
      <div className="panel-body">
        <TodoList/>
      </div>
    </div>
  );
};


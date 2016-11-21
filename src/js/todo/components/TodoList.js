import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from '../../app/components/List';
import { TodoItem } from './TodoItem';


function template(item, index) { 
  return (<TodoItem key={index} index={index} item={item} />); 
}

// TODO LIST
export const TodoList = connect(
    (state) => { //mapStateToProps
      return { 
        items: state.todo.items,
        generator: template 
      };
    }
)(List);

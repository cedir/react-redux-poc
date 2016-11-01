import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ListItem } from '../../app/components/ListItem';
import {completeTodo, deleteTodo} from '../TodoActions';


// TODO ITEM
export const TodoItem = connect(
  (state, props) => { //mapStateToProps
    return { 
      completed: props.item.completed,
      display: props.item.message 
    };
  },
  (dispatch, props) => { //mapDispatchToProps
    return {
      deleteItem: () => dispatch(deleteTodo(props.index)),
      completeItem: () => dispatch(completeTodo(props.index))
    };
  }
)(ListItem);



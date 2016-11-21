import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { RemovableListItem } from '../../app/components/RemovableListItem';
import * as actions from '../TodoActions';


function mapStateToProps(state, props) {
  return {
    index: props.index,
    text: props.item.message,
    showRemove: true,
    style: {textDecoration: props.item.completed ? 'line-through' : 'none'}
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    actions: {
      click: (item) => dispatch(actions.complete(item)),
      remove: (item) => dispatch(actions.remove(item)) 
    }
  };
}

// TODO ITEM
export const TodoItem = connect(mapStateToProps, mapDispatchToProps)(RemovableListItem);



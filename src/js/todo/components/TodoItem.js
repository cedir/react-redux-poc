import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListItem } from '../../app/components/ListItem';
import * as actions from '../TodoActions';


function mapStateToProps(state, props) {
  return {
    index: props.index,
    display: props.item.message,
    style: {textDecoration: props.item.completed ? 'line-through' : 'none'}
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

// TODO ITEM
export const TodoItem = connect(mapStateToProps, mapDispatchToProps)(ListItem);



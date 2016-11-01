import React, { PropTypes } from 'react';

// TODO ITEM
export const ListItem = ({ display, completed, deleteItem, completeItem }) => {
  return (
    <li>
        <a href="#" onClick={completeItem} style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {display}
        </a>&nbsp;
        <a href="#" onClick={deleteItem} style={{textDecoration: 'none'}}>[x]</a>
    </li>
  );
};

ListItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    display: PropTypes.string.isRequired,
    completeItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
};
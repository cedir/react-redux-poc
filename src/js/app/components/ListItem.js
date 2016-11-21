import React, { PropTypes } from 'react';

// TODO ITEM
export class ListItem extends React.Component {
    constructor(){
        super();

        this.complete = this.complete.bind(this);
        this.remove = this.remove.bind(this);
    } 

    complete() {
        this.props.actions.complete(this.props.index);
    }

    remove() {
        this.props.actions.remove(this.props.index);
    }

    render() {    
        return (
            <li className="list-group-item">
                <span onClick={this.complete} style={this.props.style}>{this.props.display}</span>
                <span onClick={this.remove} className="badge">x</span>
            </li>
        );
    }
}

ListItem.propTypes = {
    index: PropTypes.number.isRequired,
    display: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    style: PropTypes.object
};
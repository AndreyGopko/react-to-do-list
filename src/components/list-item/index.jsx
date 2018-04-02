import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class ListItem extends Component {
  onRemove = () => {
    const isConfirmDelete = window.confirm('Are you sure want to delete this item?');
    isConfirmDelete && this.props.removeItem(this.props.item.id);
  }

  onDoneChange = () => {
    this.props.togleTodoDone(this.props.item.id);
  }

  render () {
    const todoClass = this.props.item.done ? 'done' : null;

    return(
      <li className='list-group-item item-container'>
        <div className={todoClass}>
          <span className='glyphicon glyphicon-ok icon' aria-hidden='true' onClick={this.onDoneChange}></span>
          {this.props.item.value}
          <button type='button' className='close' onClick={this.onRemove}>&times;</button>
        </div>
      </li>     
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
  togleTodoDone: PropTypes.func.isRequired,
}
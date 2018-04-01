import React, { Component } from 'react';

import './styles.css';

export default class ListItem extends Component {
  onClickClose = () => {
    this.props.removeItem(this.props.item.index);
  }

  onClickDone = () => {
    this.props.markTodoDone(this.props.item.index);
  }

  render () {
    const todoClass = this.props.item.done ? 'done' : 'undone';

    return(
      <li className='list-group-item'>
        <div className={todoClass}>
          <span className='glyphicon glyphicon-ok icon' aria-hidden='true' onClick={this.onClickDone}></span>
          {this.props.item.value}
          <button type='button' className='close' onClick={this.onClickClose}>&times;</button>
        </div>
      </li>     
    );
  }
}

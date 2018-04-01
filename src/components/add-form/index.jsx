import React, { Component } from 'react';

import './styles.css';

export default class AddForm extends Component {
  componentDidMount() {
    this.refs.itemName.focus();
  }

  onSubmit = (event) => {
    event.preventDefault();
    const value = this.refs.itemName.value;
    
    if(value) {
      this.props.addItem(value);
      this.refs.form.reset();
    }
  }

  render () {
    return (
      <form ref='form' onSubmit={this.onSubmit} className='form-inline'>
        <input type='text' ref='itemName' className='form-control' placeholder='Add new todo item...'/>
        <button type='submit' className='btn btn-default'>Add item</button> 
      </form>
    );   
  }
}
